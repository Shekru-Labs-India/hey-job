git init

git config core.fileMode false
git config core.autocrlf false

git add .
git commit -m "'$1'"

git rm -r --cached .
git add .
git commit -m "'$1'"

git pull origin template

chmod -R 777 ../heyjob_website/
chown -R www-data:www-data ../heyjob_website/

git push origin HEAD:template