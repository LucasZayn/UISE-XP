<?php
require "../config.php";
enviar_headers_seguranca();
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "motivo" => "metodo_invalido"]);
    exit;
}

$TOKEN_SECRETO = webhook_token();
$token = (string)($_POST["token"] ?? "");

if (!$TOKEN_SECRETO || !$token || !hash_equals($TOKEN_SECRETO, $token)) {
    http_response_code(403);
    echo json_encode(["ok" => false, "motivo" => "token_invalido"]);
    exit;
}

$ip = obter_ip_cliente();
if (!rate_limit("webhook_" . $ip, 30, 60)) {
    http_response_code(429);
    echo json_encode(["ok" => false, "motivo" => "muitas_tentativas"]);
    exit;
}

$email = trim($_POST["email"] ?? "");
$plano = trim($_POST["plano"] ?? "vitalicio");
$max_ativacoes = (int)($_POST["max_ativacoes"] ?? 1);
if ($max_ativacoes < 1) {
    $max_ativacoes = 1;
}

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["ok" => false, "motivo" => "email_vazio"]);
    exit;
}

$chave = gerar_chave_licenca();

$stmt = $pdo->prepare("INSERT INTO licencas (email, chave, plano, max_ativacoes) VALUES (?, ?, ?, ?)");
$stmt->execute([$email, $chave, $plano, $max_ativacoes]);

echo json_encode([
    "ok" => true,
    "email" => $email,
    "plano" => $plano,
    "licenca" => $chave,
]);
