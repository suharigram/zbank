<?php
require_once __DIR__ . '/config.php';

function json_response($data, $code = 200) {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function read_leads() {
    if (!file_exists(LEADS_FILE)) {
        return [];
    }
    $raw = file_get_contents(LEADS_FILE);
    $arr = json_decode($raw, true);
    return is_array($arr) ? $arr : [];
}

function write_leads($leads) {
    $dir = dirname(LEADS_FILE);
    if (!is_dir($dir)) {
        mkdir($dir, 0775, true);
    }
    file_put_contents(
        LEADS_FILE,
        json_encode($leads, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT),
        LOCK_EX
    );
}

function b24_call($method, $fields) {
    $url = rtrim(B24_WEBHOOK_URL, '/') . '/' . $method . '.json';

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($fields),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $res = curl_exec($ch);
    $err = curl_error($ch);
    $http = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($err) {
        return ['ok' => false, 'error' => 'curl: ' . $err, 'http' => $http];
    }
    $decoded = json_decode($res, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return ['ok' => false, 'error' => 'invalid response', 'http' => $http];
    }
    if (isset($decoded['error'])) {
        return [
            'ok' => false,
            'error' => $decoded['error'],
            'error_description' => $decoded['error_description'] ?? '',
            'http' => $http,
        ];
    }
    return ['ok' => true, 'result' => $decoded['result'] ?? null, 'http' => $http];
}

function send_lead_to_b24($lead) {
    $fullName = trim(implode(' ', array_filter([
        $lead['surname'] ?? '',
        $lead['name'] ?? '',
        $lead['patronymic'] ?? '',
    ])));

    $title = ($lead['topic'] !== '')
        ? $lead['topic'] . ' — ' . $fullName
        : LEAD_DEFAULT_TITLE . ' — ' . $fullName;

    $contactType = $lead['contact_type'] ?? 'phone';
    $contact = $lead['contact'] ?? $lead['phone'] ?? '';

    $comments = '';
    if ($lead['message'] !== '') {
        $comments .= $lead['message'] . "\n";
    }
    $comments .= 'Страна: ' . ($lead['country'] !== '' ? $lead['country'] : 'ru') . "\n";
    if ($contactType === 'telegram') {
        $comments .= 'Telegram: ' . $contact . "\n";
    }
    $comments .= 'Источник: ' . ($lead['page'] !== '' ? $lead['page'] : 'contacts.html');

    $fields = [
        'TITLE' => $title,
        'NAME' => $lead['name'] ?? '',
        'LAST_NAME' => $lead['surname'] ?? '',
        'SECOND_NAME' => $lead['patronymic'] ?? '',
        'COMMENTS' => $comments,
        'SOURCE_ID' => 'WEB',
    ];
    if ($contactType === 'email') {
        $fields['EMAIL'] = [['VALUE' => $contact, 'VALUE_TYPE' => 'HOME']];
    } elseif ($contactType === 'phone') {
        $fields['PHONE'] = [['VALUE' => $contact, 'VALUE_TYPE' => 'WORK']];
    }

    return b24_call('crm.lead.add', [
        'fields' => $fields,
        'params' => ['REGISTER_SONET_EVENT' => 'Y'],
    ]);
}
