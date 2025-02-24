# Git分支管理规范

## Git Flow原理

在使用 Git 的过程中如果没有清晰流程和规划，否则,每个人都提交一堆杂乱无章的 commit,项
目很快就会变得难以协调和维护。

## 分支规范

| 分支 | 说明 |
|--|--|
| main | 主分支，受保护，不允许直接push，必须通过MR合并 |
| develop | 开发分支 |
| release | 预发布分支 |
| feature-* | 特性分支，如 feature-sprint12 |
| hotfix-* | 修复线上Bug，一般是从main分支拉取，如 hotfix-20240629 |


## 基本流程

### 迭代启动

从 `main` 分支拉取 `feature-迭代` 分支

### 开发阶段

当前迭代内所有的开发人员在同一个 `feature-迭代` 分支上进行代码开发

### 测试阶段

开发人员在 `feature-迭代` 进行bugfix，并发布

### 发布上线

由负责人将 `feature-迭代` 发布到线上，并提 `MR` ，将 `feature-迭代` 合并到 `main`，之后打上相关的 `tag`， `tag` 要求符合【版本号管理规范】