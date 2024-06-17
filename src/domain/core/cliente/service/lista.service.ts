import { ICliente } from "@global/models/interfaces";
import * as repository from '../repository/mongodb';

export const obtenerListaPorIds = async (listaIdCliente: string[]): Promise<ICliente[]> => {
    return await repository.obtenerListaPorIds(listaIdCliente);
}
