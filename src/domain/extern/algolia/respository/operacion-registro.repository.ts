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

    const resultado = await index.saveObject(objeto);
    console.log('Objeto guardado con éxito:', resultado);
  } catch (error) {
    console.error('Error al guardar el objeto:', error);
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

    const resultado = await index.partialUpdateObject(objeto);
    console.log('Objeto actualizado con éxito:', resultado);
  } catch (error) {
    console.error('Error al actualizar el objeto:', error);
    throw error;
  }
}

// Función para eliminar datos en Algolia
export const eliminarDeAlgolia = async (objectID: string, indexName: string) => {
  try {
    // Obtener una referencia al índice
    const index = client.initIndex(indexName);

    const resultado = await index.deleteObject(objectID);
    console.log('Objeto eliminado con éxito:', resultado);
  } catch (error) {
    console.error('Error al eliminar el objeto:', error);
    throw error;
  }
}
