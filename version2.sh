#!/bin/bash
bundle exec jekyll build
cd _site/
find . -type f -name '*.html' -exec sed -i '' 's/%7B%7B%20site.baseurl%20%7D%7D/https\:\/\/jacobroy\.quebec\//g' {} +
find . -type f -name '*.html' -exec sed -i '' 's/\<img\ src\=\"/\<img\ src\=\"https\:\/\/jacobroy\.quebec\/public\/img\/load\.png\"\ data\-src\=\"https\:\/\/jacobroy\.quebec\//g' {} +
find . -type f -name '*.html' -exec sed -i '' 's/https\:\/\/jacobroy\.quebec\/https\:\/\/jacobroy\.quebec\//https\:\/\/jacobroy\.quebec\//g' {} +
cd ..