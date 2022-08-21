# husky

- 支持所有的git hooks
- 在我们使用git提交代码的时候，可以用来检测提交信息、run test、检查代码等

- [husky](https://typicode.github.io/husky)

## husky

```bash
# 安装
npx husky-init && npm install       # npm
yarn dlx husky-init --yarn2 && yarn # Yarn 2+

# 创建hooks
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
npx husky add .husky/pre-commit "npm test"
# 尝试提交时，如果npm test命令失败，提交将自动中止
```

## githooks

- [githooks](https://git-scm.com/docs/githooks)

常用的钩子：

- pre-commit：预提交
- commit-msg：提交消息
- pre-push