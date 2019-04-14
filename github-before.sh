git status
git config user.email "dev@mate.academy"
git config user.name "Mate academy DEV"
git config credential.helper "store --file=.git/credentials"
git config --global credential.helper wincred
echo "https://${GH_TOKEN}:@github.com" > .git/credentials