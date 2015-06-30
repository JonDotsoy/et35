et35
====

docker build -t et35 .

docker rm -f et35

docker run -e "NODE_ENV=development" -v $(pwd)/assets://ET35/assets -v $(pwd)/.sailsrc://ET35/.sailsrc -v $(pwd)/api://ET35/api -v $(pwd)/config://ET35/config -v $(pwd)/views://ET35/views -p 9910:80 -d --name et35 et35

docker run -p 9910:80 -d --name et35 et35

## Restar Service

docker restart et35

## logs

docker logs et35
docker logs -f et35


idea
----

http://www.engine.io/#
https://medium.com/@CarlyFiorina/redefining-feminism-19d25d8d8dfc
