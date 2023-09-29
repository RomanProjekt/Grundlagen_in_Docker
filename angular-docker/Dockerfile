#Basicimage nginx Webserver there are running the app
FROM nginx

#copy the default.config in the docker container folder -> etc/nginx/conf.d
COPY nginx/default.conf /etc/nginx/conf.d

#copy the full angular folder "angular-docker" in the folder path usr/share/nginx/html 
COPY dist/angular-docker /usr/share/nginx/html




#--------------------------------------------------------------------------------------------

#Konfiguration des Webservers
#https://angular-buch.com/blog/2019-12-docker2-build-once-run-anywhere

#Erstellen Sie im Wurzelverzeichnis Ihrer App ein Verzeichnis namens nginx und legen Sie darin 
#eine Datei namens default.conf mit folgendem Inhalt an:

#   server {
#       listen 80;
#       server_name localhost;

#       location / {
#       root /usr/share/nginx/html;
#       index index.html;

#       try_files $uri $uri/ /index.html;
#    }
#   }


#Konfiguration, dass der Webserver im Container auf Port 80 lauschen wird, 
#die App im Verzeichnis /usr/share/nginx/html abgelegt ist und 
#jeder URL auf /index.html "umgebogen" wird.

#Docker:
# npm install (oder yarn install
# ng build --configuration production //seit version 14 // < 14 ng build --prod
# docker build -t "name of the projekt in the docker container - angular-docker" .

# docker run -p 8093:80 -d --name web "name of the projekt in the docker container - angular-docker"
