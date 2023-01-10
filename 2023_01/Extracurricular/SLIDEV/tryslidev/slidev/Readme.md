# Create my own slidev docker container:
for some reasone it only worked once I used sudo.. 

## build container
sudo docker build -t  slidev01 .

## run container
sudo docker run --name slidev --rm -it     --user node     -v ${PWD}:/slidev     -p 3030:3030 slidev01
