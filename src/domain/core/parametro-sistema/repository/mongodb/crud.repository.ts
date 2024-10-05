import { IParametroSistema } from "@global/models/ag_cliente";
import {
  ActualizarParametroSistemaDTO,
  BuscarParametroSistemaDTO,
  CrearParametroSistemaDTO,
} from "../../dto";
import { ParametroSistemaModel } from "@domain/_connections/mongodb";
import { mongoToParametroBusqueda } from "@domain/_helpers";
import { manejadorDeErrorMongodb } from "@domain/_errors";

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

export const crear = async (dto: CrearParametroSistemaDTO): Promise<IParametroSistema> => {
  try {
    const modelMongoDB = await ParametroSistemaModel.create(dto.nuevo);
    return await obtener({ _id: modelMongoDB._id.toString() });
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const obtener = async (dto: BuscarParametroSistemaDTO): Promise<IParametroSistema> => {
  try {
    // Proceso de filtracion
    const filtros: any = {};
    if (dto._id) filtros._id = dto._id;
    else if (dto.parametroBusqueda) filtros.parametroBusqueda = dto.parametroBusqueda;
    else return null;

    const modelMongoDB = await ParametroSistemaModel.findOne(filtros);
    if (!modelMongoDB) return null;
    return mongoToParametroBusqueda(modelMongoDB);
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const actualizar = async (dto: ActualizarParametroSistemaDTO): Promise<IParametroSistema> => {
  try {
    const objeto = await obtener(dto.buscarPor);
    if (!objeto) return null;

    await ParametroSistemaModel.updateOne(
      { _id: objeto._id },
      dto.actualizado
    );

    return Object.assign(objeto, dto.actualizado);
  } catch (error) {
    return manejadorDeError(error);    
  }
};
