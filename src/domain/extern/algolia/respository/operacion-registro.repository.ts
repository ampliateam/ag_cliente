import { envs } from '@global/configs/envs';
import algoliasearch from 'algoliasearch';

// Configuración de Algolia 
const applicationId = envs.algoliaAmpliaApplicationId;
const apiKey = envs.algoliaAmpliaApiKey;

// Inicializar el cliente de Algolia
const client = algoliasearch(applicationId, apiKey);

// Función para guardar datos en Algolia
export const guardarEnAlgolia = async (objeto: any, indexName: string) => {
  try {
    // Obtener una referencia al índice
    const index = client.initIndex(indexName);

    if (envs.environment === 'personal')
      objeto.idDevAmplia = envs.idDevAmplia;

    await index.saveObject(objeto);
  } catch (error) {
    throw error;
  }
}

// Función para actualizar datos en Algolia
export const actualizarEnAlgolia = async (objeto: any, indexName: string) => {
  try {
    // Obtener una referencia al índice
    const index = client.initIndex(indexName);

    if (envs.environment === 'personal')
      objeto.idDevAmplia = envs.idDevAmplia;
    else if (envs.environment === 'development')
      objeto.idDevAmplia = 'development';

    await index.partialUpdateObject(objeto);
  } catch (error) {
    throw error;
  }
}

// Función para eliminar datos en Algolia
export const eliminarDeAlgolia = async (objectID: string, indexName: string) => {
  try {
    // Obtener una referencia al índice
    const index = client.initIndex(indexName);

    await index.deleteObject(objectID);
  } catch (error) {
    throw error;
  }
}
