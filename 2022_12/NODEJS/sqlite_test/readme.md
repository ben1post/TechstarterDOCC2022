How to start docker conatiner in DEV mode?
-> 
docker run -dp 3000:3000 \
    -w /sqlite-test --mount type=bind,src="$(pwd)",target=/sqlite-test \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"