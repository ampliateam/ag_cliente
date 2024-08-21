import { ICliente } from '@global/models/interfaces';
import {
    CrearClienteDTO,
    BuscarClienteDTO,
    ActualizarClienteDTO
} from '../dto';
import * as repository from '../repository/mongodb';
import { services } from '@domain/services';

export const crear = async (dto: CrearClienteDTO): Promise<ICliente> => {
    const result = await repository.crud.crear(dto);

    await services.extern.algolia.operacionRegistroAlgolia({
        data: result,
        operacion: 'crear',
        tipoRegistro: 'cliente',
    });

    return result;
}

export const obtener = async (dto: BuscarClienteDTO): Promise<ICliente> => {
    return await repository.crud.obtener(dto);
}

export const actualizar = async (dto: ActualizarClienteDTO): Promise<ICliente> => {
    const result = await repository.crud.actualizar(dto);

    await services.extern.algolia.operacionRegistroAlgolia({
        data: {
            ...dto.actualizado,
            _id: result._id,
        },
        operacion: 'actualizar',
        tipoRegistro: 'cliente',
    });

    return result;
}
