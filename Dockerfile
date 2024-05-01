# Start with a base image containing Java runtime
FROM maven:3.9.6 as build

# cd into the app directory
WORKDIR /usr/src/app

# Copy the pom.xml file
COPY pom.xml .

# Copy your other files
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests
RUN cp target/wisdom-pet-0.0.1-SNAPSHOT.jar app.jar

# Start with a base image containing Java runtime
FROM openjdk:22

WORKDIR /app

# Copy the application's .jar file from the build stage
COPY --from=build /usr/src/app/app.jar ./app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]