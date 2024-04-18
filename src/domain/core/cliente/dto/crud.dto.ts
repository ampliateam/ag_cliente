import {
    ICliente,
    IClienteOpcional,
} from "@global/models/interfaces";

export interface CrearClienteDTO {
    cliente: ICliente;
}

export interface BuscarClienteDTO {
    id?: string;
    nombreApellido?: {
        nombre: string;
        apellido: string;
        nota?: string;
    }
}

export interface ActualizarClienteDTO {
    buscarPor: BuscarClienteDTO;
    actualizado: IClienteOpcional;
}
