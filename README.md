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
