
#Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile
#in this example there are node with the version :12
FROM node:12

#Set the environment variable key to the value value
ENV TZ="Europe/Amsterdam"

# Copy files or folders from source to the dest path in the image's filesystem.
# copy the file server.js in the dest path  /src/
COPY server.js /src/

# At the end, set the user to use when running this image
# he USER instruction sets the user name (or UID) and optionally the user group (or GID) 
#to use as the default user and group for the remainder of the current stage. 
#The specified user is used for RUN instructions and at runtime, 
#runs the relevant ENTRYPOINT and CMD commands.
USER node

#The exec form is parsed as a JSON array, which means that you must use double-quotes (") around words not single-quotes (').
#Can only have 1, which is your execute start point
#Now it exec the server.js File through node interpreter
CMD ["node", "/src/server.js"]