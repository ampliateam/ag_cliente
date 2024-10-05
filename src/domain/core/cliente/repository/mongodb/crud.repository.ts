import { ICliente } from "@global/models/ag_cliente";
import { ActualizarClienteDTO, BuscarClienteDTO, CrearClienteDTO } from "../../dto";
import { ClienteModel } from "@domain/_connections/mongodb";
import { mongoToCliente } from "@domain/_helpers";
import { manejadorDeErrorMongodb } from "@domain/_errors";

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

export const crear = async (dto: CrearClienteDTO): Promise<ICliente> => {
    try {
        const clienteMongoDB = await ClienteModel.create(dto.cliente);
        return await obtener({ _id: clienteMongoDB._id.toString() });
    } catch (error) {
        return manejadorDeError(error);        
    }
}

export const obtener = async (dto: BuscarClienteDTO): Promise<ICliente> => {
    try {
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
    } catch (error) {
        return manejadorDeError(error);        
    }
}

export const actualizar = async (dto: ActualizarClienteDTO): Promise<ICliente> => {
    try {
        const cliente: ICliente = await obtener(dto.buscarPor);
        if (!cliente) return null;

        await ClienteModel.updateOne({
            _id: cliente._id
        }, dto.actualizado);

        return Object.assign({}, cliente, dto.actualizado);
    } catch (error) {
        return manejadorDeError(error);        
    }
}
