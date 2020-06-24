@echo off
node scripts\gitlog.js
call npx vue-cli-service build --mode file