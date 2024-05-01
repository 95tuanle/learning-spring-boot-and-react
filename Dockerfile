# Start with a base image containing Java runtime
FROM openjdk:21-jdk-slim as build

# cd into the app directory
WORKDIR /usr/src/app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml file
COPY pom.xml .

# Copy your other files
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests
RUN cp target/wisdom-pet-0.0.1-SNAPSHOT.jar app.jar

# Start with a base image containing Java runtime
FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the application's .jar file from the build stage
COPY --from=build /usr/src/app/app.jar ./app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]