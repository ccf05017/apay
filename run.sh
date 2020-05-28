docker stop haepaystorefront
docker build -t haepaystorefront .
docker run -it -p 8888:3000 -d --rm --name haepayfront haepaystorefront