How to start docker conatiner in DEV mode?
-> 
docker run -dp 3000:3000 \
    -w /playground_container --mount type=bind,src="$(pwd)",target=/playground_container \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"