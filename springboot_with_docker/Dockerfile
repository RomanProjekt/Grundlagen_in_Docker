
#Basic Image: 
#https://hub.docker.com/_/eclipse-temurin
#JRE (Java Runtime Environment) Images
FROM eclipse-temurin:17-jdk-alpine

#https://docs.docker.com/storage/volumes/
#In the context of Docker, a volume is a persistent storage location that exists outside of the container. 
#Create a volumen drive with the name tmp in the root directory from you docker container
VOLUME /tmp

#https://docs.docker.com/engine/reference/builder/
#Copy all File with *.jar in root directory with the name app.jar
#In this example, the file create in the root directory in you docker containter 
COPY target/*.jar app.jar

#ENTRYPOINT is one of the many instructions you can write in a dockerfile. 
#The ENTRYPOINT instruction is used to configure the executables 
#that will always run after the container is initiated. 

#https://docs.docker.com/engine/reference/builder/#entrypoint

#The shell form:
# in the enrypoint comman is the executable file named app.jar in root directory 

#A JAR (Java Archive) is a package file format typically used to aggregate many 
#Java class files and associated metadata and resources (text, images, etc.) 
#into one file to distribute application software or libraries on the Java platform.

# exexution of jar-Files : [java] [-jar] [path to the jar-file]
ENTRYPOINT ["java","-jar","/app.jar"]