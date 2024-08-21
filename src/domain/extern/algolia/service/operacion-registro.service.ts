import * as repository from '../respository';
import { OperacionRegistroAlgoliaDTO } from '../dto';
import { envs } from '@global/configs/envs';

export const operacionRegistroAlgolia = async (dto: OperacionRegistroAlgoliaDTO) => {
  const { data, tipoRegistro } = dto;

  // Modelo de algolia
  const modelAlgolia = {
    ...data,
    objectID: data._id
  };

  if (tipoRegistro === 'cliente') 
    return await operacionAlgoliaCliente(dto.operacion, modelAlgolia);

  return false;
};



const operacionAlgoliaCliente = async (operacion: string, modelAlgolia: any) => {
  const algoliaIndex = envs.algoliaAmpliaIndexCliente;

  if (operacion === 'crear') {
    await repository.guardarEnAlgolia(modelAlgolia, algoliaIndex);
  } else if (operacion === 'actualizar') {
    if (modelAlgolia.estado === 'eliminado') {
      await repository.eliminarDeAlgolia(modelAlgolia.objectID, algoliaIndex);
    } else {
      await repository.actualizarEnAlgolia(modelAlgolia, algoliaIndex);
    }
  } else if (operacion === 'eliminar') {
    await repository.eliminarDeAlgolia(modelAlgolia.objectID, algoliaIndex);
  } else {
    console.error(`No existe la operacion [${operacion}]`);
  }

  return true;
};