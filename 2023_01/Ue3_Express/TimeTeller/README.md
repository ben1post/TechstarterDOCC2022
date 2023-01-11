# NODEJSDockerTutorial
 Einfaches Node JS Docker Dev Environment für Techies


## Empfehlung:
Macht das [Docker Getting Started Tutorial](https://github.com/docker/getting-started) einmal komplett durch.

Dafür lohnt es sich erst einmal [Docker Desktop](https://www.docker.com/products/docker-desktop/) zu installieren. Dann hat man ne schöne GUI für Docker.


## Was ist diese Repo?
In diesem GitHub Repo habe ich ein minimales Node JS Projekt angelegt, dass ihr per:

```
git clone https://github.com/ben1post/NODEJSDockerTutorial
```

in einen Ordner eurer Wahl kopieren könnt. Von der Basis (oder Template) heraus könnt ihr anfangen euer `main.js` anzupassen, oder per `yarn install` weitere Node JS Packages zu installieren.

## Wie starten wir den Docker Container?
Docker ist echt praktisch, auf RedHat.com gibt es eine schöne Erklärung ([LINK](https://www.redhat.com/de/topics/containers/what-is-docker)).
Wenn ihr das Repo zu euch runtergeladen habt, dann müsst ihr erst in den neuen Ordner wechseln:

```
cd NODEJSDockerTutorial/
```

Wenn Docker oder Docker Desktop installiert sind, könnt ihr nun einen interaktiven Node JS Container mit dem folgenden Befehl im Terminal starten:

```
docker run -dp 3000:3000 \
    -w /NODEJSDockerTutorial --mount type=bind,src="$(pwd)",target=/NODEJSDockerTutorial\
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```
Das funktioniert nur, wenn ihr in dem Ordner seid, in dem auch die `package.json` und `main.js` Files sind. Falls ihr später mal den Ordner Namen ändert, muss das sich auch in diesem Befehl widerspiegeln. 

## Was bedeuted der Befehl?
Der Container wird temporär erstellt, basierend auf dem `node:18-alpine` Image und den Dateien im Ordner. Der Container spiegelt 1 zu 1 die lokalen Dateien wieder, und wird jedes mal bei einer Code-Änderung (dank `nodemon`) neu gestartet.

`-dp 3000:3000` <- startet den Container "detached" und mit dem Host Port 3000 gebunden an den Container Port 3000.

`-w /NODEJSDockerTutorial --mount type=bind,src="$(pwd)",target=/NODEJSDockerTutorial\` <- dadurch wird der Ordner gemountet, also an den Container gebunden, dadurch können wir die Files weiter in unserem lokalen System bearbeiten.

`node:18-alpine` ist das Image mit dem wir unseren Dev Container starten.

`sh -c "yarn install && yarn run dev"` <- im Container wird die Shell aufgerufen, und die beiden Commands ausgeführt. Dadurch werden einmal die Dependencies (Node Modules) installiert, mit dem Yarn package manager ([LINK](https://www.typedigital.de/blog/npm-yarn-oder-pnpm) zu mehr Infos).

Der 2. Teil nach dem `&&` lässt das `dev` script, dass in unserem `package.json` definiert ist laufen.
Da steht `nodemon main.js`, also führt es einfach das Skript `main.js` mit Hilfe von dem [Nodemon](https://nodemon.io) package aus. Dadurch wird es automatisch immer wieder neu geladen, wenn eine Änderung im `main.js` gespeichert wird. Das macht das Arbeiten an dem Projekt deutlich einfacher.

## Debug und Status
Geht dazu in Docker Desktop beim einzelnen Container auf "View Details" und Logs. 

In der Kommandozeile geht es auch einfach, benutzt dafür erst einmal folgenden folgenden Befehl
```
docker ps
```
Der Befehlt zeigt euch alle laufenden Container an, sieht etwa so aus:

```
techie@pc NODEJSDockerTutorial $ docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS          PORTS                    NAMES
92e1b13632e4   node:18-alpine   "docker-entrypoint.s…"   11 minutes ago   Up 11 minutes   0.0.0.0:3000->3000/tcp   determined_hamilton

techie@pc NODEJSDockerTutorial $ docker logs 92e1b13632e4
```
Um die Container logs zu checken könnt ihr einfach, wie ihr im zweiten Befehl oben seht die `CONTAINER ID` kopieren, und an den Befehl `docker logs` anfügen.

Wenn alles geklappt hat, lest ihr etwa das hier:
```
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 2.45s.
yarn run v1.22.19
$ nodemon main.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node main.js`
Hallo Welt!
[nodemon] clean exit - waiting for changes before restart
```

## Nächste Schritte:
Jetzt könnt ihr anfangen `main.js` weiter zu bearbeiten, und mit dem `package.json` und `yarn install` weitere Node Modules einfügen und eure eigene App im Container bauen.

Ich hoffe so ist es schonmal nützlich!

Diese Repo werde ich weiter ausgebauen, und zusätzlich den `build` Schritt und das Deployment des Containers behandeln. Da könnte ihr auch gerne mithelfen per Fork und Pull Request!
