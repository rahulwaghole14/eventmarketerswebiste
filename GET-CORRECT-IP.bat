@echo off
echo ========================================
echo MarketBrand.ai - Get Correct IP Address
echo ========================================
echo.

REM Get the current IP address
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set "ip=%%i"
    set "ip=!ip: =!"
    goto :found_ip
)

:found_ip
echo Your current IP address is: %ip%
echo.
echo ========================================
echo Website URLs:
echo Local:   http://localhost:3000
echo Network: http://%ip%:3000
echo ========================================
echo.
echo Copy this URL to your browser: http://%ip%:3000
echo.
pause


