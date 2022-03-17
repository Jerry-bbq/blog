#!/bin/bash

git status -s

yarn build

git add .

yarn commit

git push