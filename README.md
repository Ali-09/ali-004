# Service Mailer
This service is made in nodejs and is service of mailer for my front [portfolio](https://jesusali.dev) with OAuth2 for authenticate gmail and jwt

## Requirements
#
Nodejs vs16.x.x
Docker for run container
>


## Envairoments
#
First of all create proyect in https://console.cloud.google.com/apis/dashboard, after add credential OAuth2 for generate id and secret client in https://console.cloud.google.com/apis/credentials, add user gmail https://console.cloud.google.com/apis/credentials/consent and enable service gmail in https://console.cloud.google.com/apis/library in your proyect.
>

Finally in https://developers.google.com/oauthplayground generate you refresh token, with config engine in top and right browser, check option **Use your own OAuth credentials** and add client and secret token, Authorize APIs button with url https://mail.google.com and login your account gmail, generate token and copy **refresh_token**
>

In the docker-compose give to envs in file called **env.local** for run
>

Vars to declare in **env.local**
>

```bash
PASSWORD_HASH=<secret-password-for-jwt>
PORT=<port-server-run>
USER=<user-add-of-proyect-google>
CLIENT_ID=<client-id-of-proyect-google>
CLIENT_SECRET=<client-secrete-proyect-google>
REFRESH_TOKEN=<refresh-token-generate-console-oauth2>
```

## Run
#
For dev you can use
```bash
docker-compose up --build
```
or
```bash
npm install
npm run start
```

## Deploy
#
For deploy proyect change docker-compose.yml line target
```bash
    build:
      context: .
      target: dev
```
to:
```bash
    build:
      context: .
      target: production
```


## Tools
#
- Express JS
- body-parser
- Googleapis
- Jsonwebtoken
- Nodemailer
- Serve-favico

