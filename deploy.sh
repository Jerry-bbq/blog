#!/bin/bash

git status -s

vuepress build docs

echo -e "\033[32m 打包成功！ \033[0m"

git add .

git commit -m "build: build"

git push

echo -e "\033[32m push成功！ \033[0m"