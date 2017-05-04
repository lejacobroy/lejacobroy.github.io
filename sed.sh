find . -type f -name '*.md' -exec sed -i '' 's/\ \"/\"\ title\=\"/g' {} +
find . -type f -name '*.md' -exec sed -i '' 's/\"[)]/\"\>\<\/div\>/g' {} +
find . -type f -name '*.md' -exec sed -i '' 's/!\[.*[{{]/\<div\>\<img\ src\=\"{{/g' {} +