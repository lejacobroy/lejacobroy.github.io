#!/bin/bash
bundle exec jekyll build
cd _site/
find . -type f -name '*.html' -exec sed -i '' 's/%7B%7B%20site.baseurl%20%7D%7D/http\:\/\/localhost\:4000\//g' {} +
find . -type f -name '*.html' -exec sed -i '' 's/\<img\ src\=\"/\<img\ src\=\"http\:\/\/localhost\:4000\/public\/img\/load\.png\"\ data\-src\=\"/g' {} +
cd ..