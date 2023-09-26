
#Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile
#In this example the base Image ist python with version 3
FROM python:3

#Set the environment variable key to the value value
#Timezone
ENV TZ="Europe/Amsterdam"

# Copy files or folders from source to the dest path in the image's filesystem.
# copy the file server.py in the dest path  /src/
COPY server.py /src/

# At the end, set the user to use when running this image
# he USER instruction sets the user name (or UID) and optionally the user group (or GID) 
USER www-data

#Now it exec the server.py File through python inpreter
CMD ["python", "/src/server.py"]