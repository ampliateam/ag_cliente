import { ClienteModel } from "@domain/_connections/mongodb";
import { manejadorDeErrorMongodb } from "@domain/_errors";
import { mongoToCliente } from "@domain/_helpers";

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const obtener = async (filtros: any) => {
  try {
    const listaModelMongo = await ClienteModel.find(filtros);
    return listaModelMongo.map(v => mongoToCliente(v));
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    await ClienteModel.updateMany(filtros, data, opcionesAux);
    const actualizados = await ClienteModel.find(filtros);
    return actualizados.map(p => {
    return Object.assign(mongoToCliente(p), data);
  });
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const obtenerPorID = async (id: string) => {
  try {
    const modelMongo = await ClienteModel.findById(id);
    return mongoToCliente(modelMongo);
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    const actualizados = await ClienteModel.find(filtros);
    await ClienteModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
    return Object.assign(mongoToCliente(actualizados[0]), data);
  } catch (error) {
    return manejadorDeError(error);    
  }
};
