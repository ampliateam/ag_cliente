import { ICliente, IParametroSistema } from "@global/models/ag_cliente";

const mongoToModel = (mongo: any) => {
    if (!mongo) return null;

    const mongoObj = mongo.toObject();
    const mongoKeys = Object.keys(mongoObj);

    const obj = {};
    mongoKeys.map(key => obj[key] = mongoObj[key]);
    obj['_id'] = obj['_id'].toString();

    return obj;
}

export const mongoToCliente = (mongo: any): ICliente => {
    return mongoToModel(mongo) as ICliente;
}

export const mongoToParametroBusqueda = (mongo: any): IParametroSistema => {
    return mongoToModel(mongo) as IParametroSistema;
}
