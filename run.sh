docker stop haepaystorefront
docker build -t haepaystorefront .
docker run -it -p 3000:3000 -d --rm --name haepaystorefront haepaystorefront