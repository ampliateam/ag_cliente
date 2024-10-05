import {
  ActualizarParametroSistemaDTO,
  BuscarParametroSistemaDTO,
  CrearParametroSistemaDTO
} from '../dto';
import * as repository from '../repository/mongodb';

export const crear = async (dto: CrearParametroSistemaDTO) => {
  return await repository.crud.crear(dto);
};

export const obtener = async (dto: BuscarParametroSistemaDTO) => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (dto: ActualizarParametroSistemaDTO) => {
  return await repository.crud.actualizar(dto);
};
