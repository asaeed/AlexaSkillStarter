
cd src
zip -r ../src.zip .
cd ..

aws lambda update-function-code \
  --function-name bedtime\
  --zip-file "fileb://src.zip"