#!/bin/bash

git status -s

vuepress build docs

echo "打包成功！"

git add .

git commit -m "build: build"

git push

echo "push成功！"