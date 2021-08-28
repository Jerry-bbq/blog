set -e
npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f 'git地址' master
cd -