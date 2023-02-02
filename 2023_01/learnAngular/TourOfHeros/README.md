# TourOfHeros

Angular Tutorial

docker run -dp 3000:3000 \
    -w /TourOfHeros --mount type=bind,src="$(pwd)",target=/TourOfHeros\
    node:18-alpine \
    sh -c "yarn install && yarn run dev"