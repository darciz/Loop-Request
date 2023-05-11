@echo off

set url=https://example.com/
set timeout=1

:loop
setlocal
set "result="
for /f "delims=" %%I in ('curl -sS %url%') do set "result=%%I"

if defined result (
  echo true
) else (
  echo Request timed out
)

timeout /t %timeout% /nobreak >nul
endlocal
goto loop