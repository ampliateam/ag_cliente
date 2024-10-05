import {
    TClienteContacto,
    TClienteDireccion,
    TClienteEstado,
    TClienteRecordatorio,
} from '@global/models/ag_cliente';

export interface ICliente {
    _id: string;
    idUsuario: string;
    idProfesional: string;
    nombre: string;
    apellido: string;
    nota: string;
    contactos: TClienteContacto[];
    direccion: TClienteDireccion;
    recordatorio: TClienteRecordatorio;
    fechaNacimiento: Date | null;
    estado: TClienteEstado;
    fechaCreacion: Date;
    fechaEliminacion: Date | null;
};

export interface IClienteOpcional {
    _id?: string;
    idUsuario?: string;
    idProfesional?: string;
    nombre?: string;
    apellido?: string;
    nota?: string;
    contactos?: TClienteContacto[];
    direccion?: TClienteDireccion;
    recordatorio?: TClienteRecordatorio;
    fechaNacimiento?: Date | null;
    estado?: TClienteEstado;
    fechaCreacion?: Date;
    fechaEliminacion?: Date | null;
};
