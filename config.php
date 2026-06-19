<?php
require_once __DIR__ . "/security.php";

// Edite aqui NO SERVIDOR se config.local.php nao funcionar (senha = login VistaPanel)
$db_host = "sql305.infinityfree.com";
$db_name = "if0_42222416_uisexp_licencas";
$db_user = "if0_42222416";
$db_pass = "";

$local = __DIR__ . "/config.local.php";
if (is_file($local)) {
    $cfg_local = require $local;
    if (is_array($cfg_local)) {
        if (!empty($cfg_local["db_host"])) {
            $db_host = $cfg_local["db_host"];
        }
        if (!empty($cfg_local["db_name"])) {
            $db_name = $cfg_local["db_name"];
        }
        if (!empty($cfg_local["db_user"])) {
            $db_user = $cfg_local["db_user"];
        }
        if (array_key_exists("db_pass", $cfg_local) && $cfg_local["db_pass"] !== "") {
            $db_pass = $cfg_local["db_pass"];
        }
    }
}

if ($db_pass === "" || $db_pass === "SUA_SENHA_MYSQL") {
    http_response_code(500);
    die("Senha do banco vazia. Edite config.local.php ou config.php no htdocs.");
}

$pdo = null;
$ultimo_erro = "";
$hosts = array_values(array_unique(array_filter([$db_host, "sql305.infinityfree.com"])));

foreach ($hosts as $host) {
    try {
        $pdo = new PDO(
            "mysql:host=$host;port=3306;dbname=$db_name;charset=utf8mb4",
            $db_user,
            $db_pass,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
        break;
    } catch (Exception $e) {
        $ultimo_erro = $e->getMessage();
    }
}

if (!$pdo) {
    error_log("Erro ao conectar no banco: " . $ultimo_erro);
    http_response_code(500);
    die("Erro ao conectar no banco.");
}

function gerar_chave_licenca(): string
{
    return "UISEXP-" .
        strtoupper(bin2hex(random_bytes(4))) . "-" .
        strtoupper(bin2hex(random_bytes(4))) . "-" .
        strtoupper(bin2hex(random_bytes(4)));
}

function proteger_admin(): void
{
    iniciar_sessao_segura();
    if (empty($_SESSION["admin_id"])) {
        header("Location: login.php");
        exit;
    }
}

function iniciar_sessao_segura(): void
{
    if (session_status() !== PHP_SESSION_NONE) {
        return;
    }

    $secure = (!empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off");
    session_set_cookie_params([
        "lifetime" => 0,
        "path" => "/",
        "httponly" => true,
        "secure" => $secure,
        "samesite" => "Lax",
    ]);
    session_start();
}

function csrf_token(): string
{
    iniciar_sessao_segura();
    if (empty($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    return $_SESSION["csrf_token"];
}

function validar_csrf(): void
{
    iniciar_sessao_segura();
    $token = $_POST["csrf_token"] ?? "";
    if (!$token || empty($_SESSION["csrf_token"]) || !hash_equals($_SESSION["csrf_token"], $token)) {
        http_response_code(403);
        die("Ação inválida.");
    }
}

function webhook_token(): string
{
    $local = __DIR__ . "/config.local.php";
    $cfg = is_file($local) ? require $local : [];
    return getenv("UISEXP_WEBHOOK_TOKEN") ?: ($cfg["webhook_token"] ?? "");
}

function licenca_hwids_registrados(PDO $pdo, array $licenca): array
{
    $stmt = $pdo->prepare("SELECT hwid FROM licenca_hwids WHERE licenca_id = ?");
    $stmt->execute([(int)$licenca["id"]]);
    $hwids = array_column($stmt->fetchAll(), "hwid");

    if (!empty($licenca["hwid"]) && !in_array($licenca["hwid"], $hwids, true)) {
        $hwids[] = $licenca["hwid"];
    }

    return array_values(array_unique(array_filter($hwids)));
}

function licenca_registrar_hwid(PDO $pdo, array $licenca, string $hwid): void
{
    $stmt = $pdo->prepare("INSERT IGNORE INTO licenca_hwids (licenca_id, hwid) VALUES (?, ?)");
    $stmt->execute([(int)$licenca["id"], $hwid]);

    $stmt = $pdo->prepare("UPDATE licencas SET hwid = ?, ativacoes = ativacoes + 1 WHERE id = ?");
    $stmt->execute([$hwid, (int)$licenca["id"]]);
}

function licenca_resetar_pcs(PDO $pdo, int $licenca_id): void
{
    $stmt = $pdo->prepare("DELETE FROM licenca_hwids WHERE licenca_id = ?");
    $stmt->execute([$licenca_id]);

    $stmt = $pdo->prepare("UPDATE licencas SET hwid = NULL, ativacoes = 0 WHERE id = ?");
    $stmt->execute([$licenca_id]);
}
