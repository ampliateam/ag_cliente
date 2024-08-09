import * as repository from '../respository';
import { OperacionRegistroAlgoliaDTO } from '../dto';
import { envs } from '@global/configs/envs';

export const operacionRegistroAlgolia = async (dto: OperacionRegistroAlgoliaDTO) => {
  const { data, tipoRegistro } = dto;

  // Modelo de algolia
  const modelAlgolia = {
    ...data,
    objectID: data.id
  };

  if (tipoRegistro === 'cliente') 
    return await operacionAlgoliaCliente(dto, modelAlgolia);

  return false;
};



const operacionAlgoliaCliente = async (dto: OperacionRegistroAlgoliaDTO, modelAlgolia: any) => {
  const { operacion } = dto;
  
  if (operacion === 'crear') {
    await repository.guardarEnAlgolia(modelAlgolia, envs.algoliaAmpliaIndexCliente);
  } else if (operacion === 'actualizar') {
    if (modelAlgolia.estado === 'eliminado') {
      await repository.eliminarDeAlgolia(modelAlgolia.objectID, envs.algoliaAmpliaIndexCliente);
    } else {
      await repository.actualizarEnAlgolia(modelAlgolia, envs.algoliaAmpliaIndexCliente);
    }
  } else if (operacion === 'eliminar') {
    await repository.eliminarDeAlgolia(modelAlgolia.objectID, envs.algoliaAmpliaIndexCliente);
  } else {
    console.error(`No existe la operacion [${operacion}]`);
  }

  return true;
};