import { ICliente } from "@global/models/interfaces";
import { EliminarLogicamenteClienteDTO } from "../dto";
import * as repository from '../repository/mongodb';
import { services } from "@domain/services";

export const eliminarLogicamente = async (dto: EliminarLogicamenteClienteDTO): Promise<ICliente> => {
    const result = await repository.crud.actualizar({
        buscarPor: dto.buscarPor,
        actualizado: {
            estado: 'eliminado',
            fechaEliminacion: dto.fechaEliminacion
        },
    });

    await services.extern.algolia.operacionRegistroAlgolia({
        data: { _id: result._id },
        operacion: 'eliminar',
        tipoRegistro: 'cliente',
    });

    return result;
}
