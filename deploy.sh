#!/bin/bash

git status -s

vuepress build docs

git add .

git commit -m "build: build"

git push