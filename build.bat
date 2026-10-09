@echo off
chcp 65001 >nul
where node >nul 2>nul || (echo Установите Node.js LTS: https://nodejs.org & pause & exit /b 1)
call npm install || goto :err
call npm run fonts || goto :err
call npm run dist || goto :err
echo.
echo Готово. Установщик и portable-версия лежат в папке dist\
pause
exit /b 0
:err
echo Ошибка сборки.
pause
exit /b 1
