$ErrorActionPreference = "Stop"

$bucket = "gs://hailifu-website.firebasestorage.app"
$corsFile = Join-Path $PSScriptRoot "..\\storage.cors.json"

if (-not (Test-Path $corsFile)) {
    throw "Missing CORS file: $corsFile"
}

if (-not (Get-Command gsutil -ErrorAction SilentlyContinue)) {
    throw "gsutil is not installed. Install Google Cloud SDK and run: gsutil cors set storage.cors.json $bucket"
}

Write-Host "Applying Firebase Storage CORS policy from $corsFile to $bucket ..."
gsutil cors set $corsFile $bucket
Write-Host "CORS policy applied."
