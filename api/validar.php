<?php
require "../config.php";
enviar_headers_seguranca();
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "motivo" => "metodo_invalido"]);
    exit;
}

$ip = obter_ip_cliente();
if (!rate_limit("validar_" . $ip, 60, 60)) {
    http_response_code(429);
    echo json_encode(["ok" => false, "motivo" => "muitas_tentativas"]);
    exit;
}

$chave = trim((string)($_POST["licenca"] ?? $_POST["chave"] ?? ""));
$hwid = trim((string)($_POST["hwid"] ?? ""));
$email = trim((string)($_POST["email"] ?? ""));

if (!$chave) {
    echo json_encode(["ok" => false, "motivo" => "licenca_vazia"]);
    exit;
}

if (strlen($chave) > 80 || strlen($hwid) > 255 || strlen($email) > 120) {
    echo json_encode(["ok" => false, "motivo" => "dados_invalidos"]);
    exit;
}

if ($email !== "" && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["ok" => false, "motivo" => "dados_invalidos"]);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM licencas WHERE chave = ? LIMIT 1");
$stmt->execute([$chave]);
$licenca = $stmt->fetch();

if (!$licenca) {
    echo json_encode(["ok" => false, "motivo" => "nao_encontrada"]);
    exit;
}

if ($licenca["status"] !== "ativa") {
    echo json_encode(["ok" => false, "motivo" => "bloqueada"]);
    exit;
}

$max = max(1, (int)$licenca["max_ativacoes"]);
$hwids = licenca_hwids_registrados($pdo, $licenca);

if ($hwid && in_array($hwid, $hwids, true)) {
    echo json_encode([
        "ok" => true,
        "motivo" => "valida",
        "email" => $licenca["email"],
        "plano" => $licenca["plano"],
    ]);
    exit;
}

if (!$hwid) {
    echo json_encode(["ok" => false, "motivo" => "hwid_vazio"]);
    exit;
}

if (count($hwids) >= $max) {
    echo json_encode(["ok" => false, "motivo" => "limite_ativacoes"]);
    exit;
}

licenca_registrar_hwid($pdo, $licenca, $hwid);

if ($email && empty($licenca["email"])) {
    $upd = $pdo->prepare("UPDATE licencas SET email = ? WHERE id = ?");
    $upd->execute([$email, $licenca["id"]]);
    $licenca["email"] = $email;
}

echo json_encode([
    "ok" => true,
    "motivo" => "ativada",
    "email" => $licenca["email"],
    "plano" => $licenca["plano"],
]);
