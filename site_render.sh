cd /Volumes/Gringo/Dropbox/Jekyll_blog/ && bundle exec jekyll build && cd /Volumes/Gringo/Dropbox/Jekyll_blog/_site/ && find . -type f -name '*.html' -exec sed -i '' 's/\<img\ src\=/\<img\ src\=\"https\:\/\/jacobroy\.quebec\/public\/img\/load\.png\"\ data\-src\=/g' {} +