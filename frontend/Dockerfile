# Enzo Ferroni (RA: 10417100)
# Rafael Neves (RA: 10418316)
# Rodrygo Vasconcellos (RA: 10381768)

# Defina a versão do Node.js
ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-alpine

# Defina o ambiente para desenvolvimento ou produção (dependendo da fase do ciclo de vida)
ENV NODE_ENV development

WORKDIR /usr/src/app

# Copie os arquivos de dependências
COPY package*.json ./

# Adicione esta linha antes de executar o npm start
RUN npm install -g cross-env

# Instale todas as dependências, incluindo as de desenvolvimento
RUN npm install

# Copie o restante dos arquivos da aplicação para o container
COPY . .

# Expõe a porta 8080 (ou outra porta que sua aplicação utiliza)
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start"]
