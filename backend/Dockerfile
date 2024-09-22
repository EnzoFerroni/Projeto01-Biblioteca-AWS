# Enzo Ferroni (RA: 10417100)
# Rafael Neves (RA: 10418316)
# Rodrygo Vasconcellos (RA: 10381768)

# Etapa 1: Usar Maven para compilar o projeto
FROM maven:3.8.4-openjdk-17 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o arquivo pom.xml e as dependências (primeira parte do cache)
COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw mvnw
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline

# Copiar o código-fonte do projeto
COPY src ./src

# Compilar a aplicação
RUN ./mvnw package -DskipTests

################################################################################

# Etapa 2: Usar o JRE para rodar a aplicação
FROM eclipse-temurin:11-jre-jammy

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o JAR gerado do estágio de build
COPY --from=build /app/target/*.jar app.jar

# Expor a porta 25000 para acessar o Spring Boot
EXPOSE 25000

# Comando para rodar o JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
