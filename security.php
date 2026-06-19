<?php

function obter_ip_cliente(): string
{
    $ip = $_SERVER["REMOTE_ADDR"] ?? "0.0.0.0";
    return is_string($ip) ? $ip : "0.0.0.0";
}

function enviar_headers_seguranca(): void
{
    if (headers_sent()) {
        return;
    }
    header("X-Content-Type-Options: nosniff");
    header("X-Frame-Options: DENY");
    header("Referrer-Policy: no-referrer");
    header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
}

function rate_limit(string $chave, int $max_tentativas, int $janela_segundos): bool
{
    iniciar_sessao_segura();
    $agora = time();
    $bucket = "rate_" . $chave;

    if (empty($_SESSION[$bucket]) || !is_array($_SESSION[$bucket])) {
        $_SESSION[$bucket] = ["inicio" => $agora, "total" => 0];
    }

    $dados = &$_SESSION[$bucket];
    if (($agora - (int)$dados["inicio"]) > $janela_segundos) {
        $dados = ["inicio" => $agora, "total" => 0];
    }

    $dados["total"] = (int)$dados["total"] + 1;
    return $dados["total"] <= $max_tentativas;
}

function registrar_falha_login(): void
{
    iniciar_sessao_segura();
    $_SESSION["login_falhas"] = (int)($_SESSION["login_falhas"] ?? 0) + 1;
    $_SESSION["login_ultima_falha"] = time();
}

function limpar_falhas_login(): void
{
    iniciar_sessao_segura();
    unset($_SESSION["login_falhas"], $_SESSION["login_ultima_falha"]);
}

function login_bloqueado(): bool
{
    iniciar_sessao_segura();
    $falhas = (int)($_SESSION["login_falhas"] ?? 0);
    $ultima = (int)($_SESSION["login_ultima_falha"] ?? 0);
    if ($falhas < 5) {
        return false;
    }
    if ((time() - $ultima) > 900) {
        limpar_falhas_login();
        return false;
    }
    return true;
}

function segundos_bloqueio_login(): int
{
    iniciar_sessao_segura();
    $ultima = (int)($_SESSION["login_ultima_falha"] ?? 0);
    $restante = 900 - (time() - $ultima);
    return max(0, $restante);
}
