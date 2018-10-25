```
# initial commit
git clone https://github.com/obliviousinc/obliviousinc.github.io
cd obliviousinc.github.io/
echo "Hello World" > index.html
git add -A
git commit -m "initial"
git config credential.origin.username ben.covi@yahoo.com
git config credential.helper store
git push origin master

# trigger rebuild if page isn't working
git commit --allow-empty -m "rebuild"
git push origin master

# build locally
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

# merlot theme
https://github.com/pages-themes/merlot

# examples
https://raw.githubusercontent.com/pages-themes/merlot/master/index.md
https://pages-themes.github.io/merlot/

# posts
https://jekyllrb.com/docs/posts/
