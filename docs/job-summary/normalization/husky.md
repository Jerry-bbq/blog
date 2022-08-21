# husky

- [husky](https://typicode.github.io/husky)

## husky

### 安装

```bash
# 安装
npm install husky --save-dev
# 开启Git hooks
npm set-script prepare "husky install"
npm run prepare
```

### 添加hook

```bash
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```