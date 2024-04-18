## Valores del .env
```
ENVIRONMENT=local_development
DOCKER_PORT_EXTERNO=7000
DOCKER_PORT_INTERNO=8080
CODIGO_USUARIO_EXTERNO=ag_usuario
CONTRASENA_USUARIO_EXTERNO=ag_usuario_123
DOCKER_CONTAINER_NAME=ag_usuario_local
DOCKER_IMAGE=ag_usuario_local
```

## Posibles valores en los archivos: 
global/configs/credentials/firebase
```
"local_development" => firebase-admin-personal.json
"development"       => firebase-admin-dev.json
"testing"           => firebase-admin-test.json
"production"        => firebase-admin-prod.json
```
