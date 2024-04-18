import { ParametroSistemaModel } from '@domain/_connections/mongodb';
import { mongoToParametroBusqueda } from './mongo-to-model.helper';

export const obtenerParametroSistema = async (parametroBusqueda: string) => {
    const parametroSistema = await ParametroSistemaModel.findOne({ parametroBusqueda }).exec();
    return mongoToParametroBusqueda(parametroSistema)
}
