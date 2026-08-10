@echo off
echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit"

echo Setting branch to main...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/roxx2506-art/ryonexa.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
