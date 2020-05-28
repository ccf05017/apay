sudo docker stop haepaystorefront
sudo docker build -t haepaystorefront .
sudo docker run -it -p 3000:3000 -d --rm --name haepaystorefront haepaystorefront