<?php
require_once __DIR__ . '/lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['ok' => false, 'error' => 'Method not allowed'], 405);
}

// Honeypot против спама: поле заполняют только боты
if (!empty($_POST['website'])) {
    json_response(['ok' => true, 'bitrix' => 'spam']); // притворяемся успехом, лид не сохраняем
}

$surname = trim((string)($_POST['surname'] ?? ''));
$name = trim((string)($_POST['name'] ?? ''));
$patronymic = trim((string)($_POST['patronymic'] ?? ''));
$contactType = trim((string)($_POST['contact_type'] ?? 'phone'));
$contact = trim((string)($_POST['contact'] ?? ''));
$country = trim((string)($_POST['country'] ?? ''));
$topic = trim((string)($_POST['topic'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$page = trim((string)($_POST['page'] ?? ''));

if ($surname === '' || $name === '' || $contact === '') {
    json_response(['ok' => false, 'error' => 'Фамилия, имя и контакт обязательны'], 422);
}

if ($contactType === 'email' && !filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    json_response(['ok' => false, 'error' => 'Некорректный email'], 422);
}
if ($contactType === 'phone') {
    $digits = preg_replace('/\D/', '', $contact);
    if (strlen($digits) < 7) {
        json_response(['ok' => false, 'error' => 'Некорректный номер телефона'], 422);
    }
}
if ($contactType === 'telegram') {
    if ($contact[0] !== '@') {
        $contact = '@' . $contact;
    }
    if (strlen(ltrim($contact, '@')) < 3) {
        json_response(['ok' => false, 'error' => 'Некорректный ник в Telegram'], 422);
    }
}

$lead = [
    'id' => uniqid('lead_', true),
    'created_at' => date('Y-m-d H:i:s'),
    'surname' => $surname,
    'name' => $name,
    'patronymic' => $patronymic,
    'contact_type' => $contactType,
    'contact' => $contact,
    'country' => $country,
    'topic' => $topic,
    'message' => $message,
    'page' => $page,
    'bitrix_id' => null,
    'bitrix_status' => 'pending',
    'bitrix_error' => null,
];

$res = send_lead_to_b24($lead);
if ($res['ok']) {
    $lead['bitrix_id'] = $res['result'];
    $lead['bitrix_status'] = 'sent';
} else {
    $lead['bitrix_status'] = 'error';
    $lead['bitrix_error'] = ($res['error'] ?? '') . ' ' . ($res['error_description'] ?? '');
}

$leads = read_leads();
array_unshift($leads, $lead);
write_leads($leads);

// Лид сохранён локально в любом случае — клиенту показываем успех.
json_response(['ok' => true, 'bitrix' => $lead['bitrix_status']]);
