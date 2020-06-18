@echo off
cd dist
git init
git add .
git commit -m "update"
git remote add origin git@github.com:tootal/gan.git
git push --set-upstream origin master -f
echo deploy successful!