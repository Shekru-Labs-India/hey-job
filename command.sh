git init

git config core.fileMode false
git config core.autocrlf false

git add .
git commit -m "'$1'"

git rm -r --cached .
git add .
git commit -m "'$1'"

git pull origin template

# Check if the system is Linux, then set correct permissions for the new repo
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    chmod -R 777 ../heyjob_website/
    chown -R root:root ../heyjob_website/
fi

git push origin HEAD:template
