import { ICliente } from '@global/models/interfaces';
import {
    CrearClienteDTO,
    BuscarClienteDTO,
    ActualizarClienteDTO
} from '../dto';
import * as repository from '../repository';

export const crear = async (dto: CrearClienteDTO): Promise<ICliente> => {
    return await repository.crud.crear(dto);
}

export const obtener = async (dto: BuscarClienteDTO): Promise<ICliente> => {
    return await repository.crud.obtener(dto);
}

export const actualizar = async (dto: ActualizarClienteDTO): Promise<ICliente> => {
    return await repository.crud.actualizar(dto);
}
