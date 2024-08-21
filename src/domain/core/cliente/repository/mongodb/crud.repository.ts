import { ICliente } from "@global/models/interfaces";
import { ActualizarClienteDTO, BuscarClienteDTO, CrearClienteDTO } from "../../dto";
import { ClienteModel } from "@domain/_connections/mongodb";
import { mongoToCliente } from "@domain/_helpers";

export const crear = async (dto: CrearClienteDTO): Promise<ICliente> => {
    const clienteMongoDB = await ClienteModel.create(dto.cliente);
    return await obtener({ _id: clienteMongoDB._id.toString() });
}

export const obtener = async (dto: BuscarClienteDTO): Promise<ICliente> => {
    // Proceso de filtracion
    const filtros:any = {};
    if (dto._id) {
        filtros._id = dto._id;
    } else return null;

    // Obtener todos los clientes que tengan estado "habilitado"
    filtros.estado = 'habilitado';

    const clienteMongoDB = await ClienteModel.findOne(filtros);
    if (!clienteMongoDB) return null;
    return mongoToCliente(clienteMongoDB);
}

export const actualizar = async (dto: ActualizarClienteDTO): Promise<ICliente> => {
    const cliente: ICliente = await obtener(dto.buscarPor);
    if (!cliente) return null;

    await ClienteModel.updateOne({
        _id: cliente._id
    }, dto.actualizado);

    return Object.assign({}, cliente, dto.actualizado);
}
