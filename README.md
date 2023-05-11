# Api Upload Google Drive

#### Api para fazer upload de arquivos no google drive

- Criar conta no https://cloud.google.com/
- Acesse o gerenciador de api's e crie um novo projeto https://console.cloud.google.com/apis/dashboard
- Adicione as informações de validação no arquivo googledrive.json
- No arquivo .env e necessario adicionar na variavel GOOOGLE_API_FOLDER_ID o numero do id, da pasta que compartilhou no google drive

### Swagger
A api pode ser testada pelo swagger, utilizando a url do servidor onde foi instalado, na rota "/api/docs". Ex.: http://127.0.0.1:3000/api/docs
