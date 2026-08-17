<?php
require_once __DIR__ . '/../api/lib.php';

session_start();

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: leads.php');
    exit;
}

$authed = !empty($_SESSION['admin']);
$loginError = false;
if (!$authed && $_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'login') {
    $pass = (string)($_POST['password'] ?? '');
    if ($pass !== '' && hash_equals(ADMIN_PASSWORD, $pass)) {
        $_SESSION['admin'] = true;
        $authed = true;
    } else {
        $loginError = true;
    }
}

if ($authed && isset($_GET['resend'])) {
    $leads = read_leads();
    foreach ($leads as $i => $lead) {
        if ($lead['id'] === $_GET['resend']) {
            $res = send_lead_to_b24($lead);
            if ($res['ok']) {
                $leads[$i]['bitrix_id'] = $res['result'];
                $leads[$i]['bitrix_status'] = 'sent';
                $leads[$i]['bitrix_error'] = null;
            } else {
                $leads[$i]['bitrix_status'] = 'error';
                $leads[$i]['bitrix_error'] = ($res['error'] ?? '') . ' ' . ($res['error_description'] ?? '');
            }
            break;
        }
    }
    write_leads($leads);
    header('Location: leads.php');
    exit;
}

function esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
}

function full_name($lead) {
    return trim(implode(' ', array_filter([
        $lead['surname'] ?? '',
        $lead['name'] ?? '',
        $lead['patronymic'] ?? '',
    ])));
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Лиды — Z Банк CRM</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: "Segoe UI", system-ui, sans-serif; background: #0e0e0e; color: #f5f5f5; min-height: 100vh; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 32px 20px 60px; }
    .top { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
    .logo { display: flex; align-items: center; gap: 10px; font-weight: 900; font-size: 1.3rem; }
    .logo-mark { width: 38px; height: 38px; border-radius: 50%; background: #ffdd2d; border: 2px solid #141414; color: #141414; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; }
    h1 { font-size: 1.5rem; font-weight: 900; letter-spacing: -0.5px; }
    .stats { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .stat { background: #1c1c1c; border: 2px solid #2a2a2a; border-radius: 14px; padding: 12px 18px; font-size: 0.9rem; }
    .stat b { display: block; font-size: 1.3rem; color: #ffdd2d; }
    .btn { display: inline-block; border-radius: 999px; padding: 8px 16px; font-weight: 800; font-size: 0.85rem; border: 2px solid #f0f0f0; color: #f5f5f5; text-decoration: none; cursor: pointer; background: none; }
    .btn:hover { transform: translate(-1px, -1px); box-shadow: 3px 3px 0 #f0f0f0; }
    table { width: 100%; border-collapse: collapse; background: #1c1c1c; border: 2px solid #2a2a2a; border-radius: 16px; overflow: hidden; }
    th, td { text-align: left; padding: 12px 14px; font-size: 0.88rem; border-bottom: 1px solid #2a2a2a; vertical-align: top; }
    th { background: #141414; color: #ffdd2d; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 1px; }
    tr:last-child td { border-bottom: none; }
    .badge { display: inline-block; border-radius: 999px; padding: 2px 10px; font-size: 0.72rem; font-weight: 800; }
    .badge.sent { background: #ffdd2d; color: #141414; }
    .badge.error { background: #ff5a4e; color: #141414; }
    .badge.pending { background: #9a9a9a; color: #141414; }
    .err { color: #ff5a4e; font-size: 0.85rem; margin-top: 10px; }
    .muted { color: #9a9a9a; }
    .empty { text-align: center; padding: 40px; color: #9a9a9a; }
    .card { background: #1c1c1c; border: 2px solid #2a2a2a; border-radius: 16px; padding: 32px; max-width: 420px; margin: 80px auto; }
    .card h1 { margin-bottom: 20px; }
    .card input { width: 100%; padding: 12px 14px; border: 2px solid #2a2a2a; border-radius: 12px; background: #0e0e0e; color: #f5f5f5; font-size: 0.95rem; margin-bottom: 14px; }
    .card button { width: 100%; padding: 12px; border-radius: 999px; border: 2px solid #141414; background: #ffdd2d; color: #141414; font-weight: 900; font-size: 0.95rem; cursor: pointer; }
    @media (max-width: 720px) { th, td { font-size: 0.78rem; padding: 8px; } }
  </style>
</head>
<body>
<div class="wrap">

<?php if (!$authed): ?>
  <form class="card" method="post" action="leads.php">
    <h1>Вход</h1>
    <input type="password" name="password" placeholder="Пароль администратора" autofocus required />
    <input type="hidden" name="action" value="login" />
    <button type="submit">Войти</button>
    <?php if ($loginError): ?><p class="err">Неверный пароль.</p><?php endif; ?>
  </form>
<?php else: ?>
  <div class="top">
    <div>
      <div class="logo"><span class="logo-mark">Z</span> Z&nbsp;Банк <span style="color:#9a9a9a;font-weight:600;font-size:0.9rem">CRM</span></div>
      <h1>Лиды</h1>
    </div>
    <a class="btn" href="leads.php?logout=1">Выйти</a>
  </div>

  <?php
  $leads = read_leads();
  $sent = count(array_filter($leads, fn($l) => $l['bitrix_status'] === 'sent'));
  $errors = count(array_filter($leads, fn($l) => $l['bitrix_status'] === 'error'));
  ?>
  <div class="stats">
    <div class="stat">Всего <b><?php echo count($leads); ?></b></div>
    <div class="stat">В B24 <b><?php echo $sent; ?></b></div>
    <div class="stat">Ошибки <b><?php echo $errors; ?></b></div>
  </div>

  <?php if (!$leads): ?>
    <div class="empty">Пока нет лидов. Отправьте форму на странице «Контакты».</div>
  <?php else: ?>
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Имя</th>
          <th>Контакт</th>
          <th>Страна</th>
          <th>Тема</th>
          <th>Сообщение</th>
          <th>Bitrix24</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($leads as $lead): ?>
          <tr>
            <td class="muted"><?php echo esc($lead['created_at'] ?? ''); ?></td>
            <td><strong><?php echo esc(full_name($lead)); ?></strong></td>
            <td>
              <?php echo esc($lead['contact'] ?? $lead['phone'] ?? ''); ?>
              <?php if (($lead['contact_type'] ?? '') !== ''): ?>
                <br /><span class="muted" style="font-size:0.72rem"><?php echo esc($lead['contact_type']); ?></span>
              <?php endif; ?>
            </td>
            <td><?php echo esc($lead['country'] ?? 'ru'); ?></td>
            <td><?php echo esc($lead['topic'] ?? ''); ?></td>
            <td><?php echo esc($lead['message'] ?? ''); ?></td>
            <td>
              <?php if (($lead['bitrix_status'] ?? '') === 'sent'): ?>
                <span class="badge sent">лид #<?php echo esc($lead['bitrix_id'] ?? ''); ?></span>
              <?php elseif (($lead['bitrix_status'] ?? '') === 'error'): ?>
                <span class="badge error">ошибка</span>
                <br /><span class="muted" style="font-size:0.72rem"><?php echo esc($lead['bitrix_error'] ?? ''); ?></span>
                <br /><a class="btn" style="margin-top:6px" href="leads.php?resend=<?php echo urlencode($lead['id']); ?>">Отправить повторно</a>
              <?php else: ?>
                <span class="badge pending">ожидает</span>
              <?php endif; ?>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  <?php endif; ?>
<?php endif; ?>

</div>
</body>
</html>
