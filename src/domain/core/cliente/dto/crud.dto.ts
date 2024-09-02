import { IClienteOpcional } from "@global/models/interfaces";
import { TClienteEstado } from "@global/models/types";

export interface CrearClienteDTO {
    cliente: IClienteOpcional;
}

export interface BuscarClienteDTO {
    _id?: string;
    porUsuarioClienteYProfesional?: {
        idUsuario: string,
        idProfesional: string,
        estado: TClienteEstado,
    }
}

export interface ActualizarClienteDTO {
    buscarPor: BuscarClienteDTO;
    actualizado: IClienteOpcional;
}
