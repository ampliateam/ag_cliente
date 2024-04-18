import dotenv from 'dotenv';
import { EnvironmentPermitido } from '@global/models/types';

dotenv.config();

export const envs = {
    modoTest: process.env.MODO_TEST === 'true',
    codigoUsuarioExterno: process.env.CODIGO_USUARIO_EXTERNO,
    contrasenaUsuarioExterno: process.env.CONTRASENA_USUARIO_EXTERNO,
    dockerContainerName: process.env.DOCKER_CONTAINER_NAME,
    dockerImage: process.env.DOCKER_IMAGE,
    dockerPortExterno: process.env.DOCKER_PORT_EXTERNO,
    dockerPortInterno: process.env.DOCKER_PORT_INTERNO,
    environment: process.env.ENVIRONMENT as EnvironmentPermitido,
    mongoURI: process.env.MONGO_URI,
};

if (envs.modoTest && envs.environment !== 'local_development') {
    throw new Error('El sistema no puede estar en modo test en entornos remotos.');
}