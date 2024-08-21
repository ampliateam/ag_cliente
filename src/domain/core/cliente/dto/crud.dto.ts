import { IClienteOpcional } from "@global/models/interfaces";

export interface CrearClienteDTO {
    cliente: IClienteOpcional;
}

export interface BuscarClienteDTO {
    _id?: string;
}

export interface ActualizarClienteDTO {
    buscarPor: BuscarClienteDTO;
    actualizado: IClienteOpcional;
}
