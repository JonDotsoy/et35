# et35

docker build -t et35 .

docker rm -f et35
docker run -v $(pwd)://ET35/ -p 9910:80 -d --name et35 et35

## Restar Service

docker restart et35

## logs

docker logs et35
