@echo off
call npm run build
:: Upload to Qiniu kodo
qshell qupload scripts\upload.conf 1>NUL

:: Upload to gihtub-pages
cd dist
git init
git add .
git commit -m "update"
git remote add origin git@github.com:tootal/gan.git
git push --set-upstream origin master:gh-pages -f
echo deploy successful!