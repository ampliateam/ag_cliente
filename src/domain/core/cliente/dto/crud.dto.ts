import { IClienteOpcional, TClienteEstado } from "@global/models/ag_cliente";

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
