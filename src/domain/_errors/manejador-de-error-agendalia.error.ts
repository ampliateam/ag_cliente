import { IErrorCapaGlobal } from '@global/models/_system';
import { generarErrorCapaDomain } from '@domain/_errors';

export const manejadorDeErrorAgendalia = (error: any) => {
  const respuesta = manejadorDeError(error);

  // // Verificar codigos
  // ...

  throw respuesta;
};

const manejadorDeError = (error: any) => {
  const errorCapaGlobal = error.resultado as IErrorCapaGlobal;
  const errorDomain = generarErrorCapaDomain(errorCapaGlobal);

  return errorDomain;
};
