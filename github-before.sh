git status
git config --global user.email "dev@mate.academy"
git config --global user.name "Mate academy DEV"
git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials