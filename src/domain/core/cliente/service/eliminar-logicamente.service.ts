import { ICliente } from "@global/models/interfaces";
import { EliminarLogicamenteClienteDTO } from "../dto";
import * as repository from '../repository/mongodb';

export const eliminarLogicamente = async (dto: EliminarLogicamenteClienteDTO): Promise<ICliente> => {
    return await repository.crud.actualizar({
        buscarPor: dto.buscarPor,
        actualizado: {
            estado: 'eliminado',
            fechaEliminacion: dto.fechaEliminacion
        },
    });
}
