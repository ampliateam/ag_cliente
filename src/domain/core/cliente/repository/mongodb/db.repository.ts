import { ClienteModel } from "@domain/_connections/mongodb";
import { mongoToCliente } from "@domain/_helpers";

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const obtener = async (filtros: any) => {
  const listaModelMongo = await ClienteModel.find(filtros);
  return listaModelMongo.map(v => mongoToCliente(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await ClienteModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await ClienteModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToCliente(p), data);
  });
};

export const obtenerPorID = async (id: string) => {
  const modelMongo = await ClienteModel.findById(id);
  return mongoToCliente(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await ClienteModel.find(filtros);
  await ClienteModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToCliente(actualizados[0]), data);
};
