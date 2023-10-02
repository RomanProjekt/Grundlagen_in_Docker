
#Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile
#https://docs.docker.com/engine/reference/builder/
FROM nginx:1.11-alpine

#execute any commands on top of the current image as a new layer and commit the results.
#RUN: Can be many, and it is used in build process, e.g. install multiple libraries 
RUN echo 'Hallo aus dem Imagebau'

# Copy files or folders from source to the dest path in the image's filesystem.
COPY  index.html /usr/share/nginx/html

#Define the network ports that this container will listen on at runtime.
EXPOSE 80

#Provide defaults for an executing container. If an executable is not specified, 
#then ENTRYPOINT must be specified as well. There can only be one CMD instruction in a Dockerfile.
# nginx -g daemon off

#The exec form is parsed as a JSON array, which means that you must use double-quotes (") around words not single-quotes (').
#https://devtron.ai/blog/cmd-and-entrypoint-differences/
#Can only have 1, which is your execute start point
CMD ["nginx", "-g", "daemon off;"]

