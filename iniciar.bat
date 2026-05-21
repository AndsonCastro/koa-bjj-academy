@echo off
cd /d "%~dp0"
start "" "http://localhost:4200"
npm run dev -- --port 4200
