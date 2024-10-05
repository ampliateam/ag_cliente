import { generarErrorCapaDomain } from '@domain/_errors';

export const manejadorDeErrorMongodb = (error: any) => {
  const respuesta = manejadorDeError(error);

  // // Verificar codigos
  // ...

  throw respuesta;
};

const manejadorDeError = (error: any) => {
  const errorDomain = generarErrorCapaDomain({
    estado: 500,
    codigo: 'error_desconocido',
    mensajeServidor: 'Error desconocido.',
    mensajeCliente: 'Error desconocido.',
    resultado: error,
  });

  return errorDomain;
};
