

cp -r ./src/ ./temp
cp -r ./node_modules/ ./temp/node_modules
cd temp
zip -r ../temp.zip .
cd ..

rm -rf ./temp

aws lambda update-function-code \
  --function-name bedtime\
  --zip-file "fileb://temp.zip"