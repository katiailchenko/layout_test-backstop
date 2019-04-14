git status
git config user.email "dev@mate.academy"
git config user.name "Mate academy DEV"
git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials

git remote -v
echo ${TRAVIS_PULL_REQUEST}
echo ${TRAVIS_PULL_REQUEST_SLUG}
echo ${TRAVIS_BRANCH}