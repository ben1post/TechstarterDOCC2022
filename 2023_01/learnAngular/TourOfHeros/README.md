# TourOfHeros

Angular Tutorial

# Container starten:
```
docker run -dp 3000:3000 \
    -w /TourOfHeros --mount type=bind,src="$(pwd)",target=/TourOfHeros\
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```


# Dann Angular setup:
Das ist ein NodeJs Container, also muss erst noch angular installiert werden, also *im Container* im Terminal:
```
npm install -g @angular/cli
````

Dann navigation:
```
cd angular-tour-of-heroes/
```

Und es kann serviert werden:
```
ng serve --host 0.0.0.0
```

Jetzt ist die App auf `localhost:3000` erreichbar außerhalb des Docker-Containers

