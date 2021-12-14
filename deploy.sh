#! /usr/bin/bash 

# abort on errors

set -e

build

npm run build

cd dist

git init

git add .

git commit -m 'deploy'

git push -f git@github.com:javeke/gpt-3-landing.git master:gh-pages

cd ..
