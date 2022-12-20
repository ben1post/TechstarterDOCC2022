TO BUILD VUE_HELPER IMAGE:

# Build an image named vue_helper using the Setup.Dockerfile
# The build args manage permissions when executing commands from inside the container
docker build \
  --build-arg USER_ID=$(id -u) \
  --build-arg GROUP_ID=$(id -g) \
  -t vue_helper - < ./dockerfiles/Setup.Dockerfile

THEN RUN AND BIND CONTAINER: !REPLACE PATH!

docker run -v /path/to/project/:/vue-setup -it vue_helper

THEN INSIDE CONTAINER, CREATE VUE APP

vue create vue_app
