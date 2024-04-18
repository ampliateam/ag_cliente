import { ClienteModel } from "@domain/_connections/mongodb";
import { mongoToCliente } from "@domain/_helpers";

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const consultaPersonalizada = async (filtros: object = {}) => {
    const listaModelMongo = await ClienteModel.find(filtros);
    return listaModelMongo.map(v => mongoToCliente(v));
}

export const obtenerListaPorIds = async (listaId: string[]) => {
    const filtros = { '$or': [] };
    listaId.map(id => filtros['$or'].push({ _id: id }));

    const listaModelMongo = await ClienteModel.find(filtros);
    return listaModelMongo.map(v => mongoToCliente(v));
}
