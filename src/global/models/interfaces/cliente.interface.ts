import {
    TClienteContactoTipo,
    TClienteEstado,
    TClienteMensajeRecordatorioTipo,
} from '@global/models/types';

interface IClienteContacto {
    codigoTelefono: string | null;
    contacto: string;
    tipo: TClienteContactoTipo;
}

interface IClienteDireccion {
    referencia: string;
    ubicacion: [number, number] | null;
}

interface IClienteRecordatorio {
    recordatorioHabilitado: boolean;
    recordatorioDobleHabilitado: boolean;
    tipoMensaje: TClienteMensajeRecordatorioTipo;
    mensaje: string;
}

export interface ICliente {
    _id: string;
    idUsuario: string;
    idProfesional: string;
    nombre: string;
    apellido: string;
    nota: string;
    contactos: IClienteContacto[];
    direccion: IClienteDireccion;
    recordatorio: IClienteRecordatorio;
    fechaNacimiento: Date | null;
    estado: TClienteEstado;
    fechaCreacion: Date;
    fechaEliminacion: Date | null;
}

export interface IClienteOpcional {
    _id?: string;
    idUsuario?: string;
    idProfesional?: string;
    nombre?: string;
    apellido?: string;
    nota?: string;
    contactos?: IClienteContacto[];
    direccion?: IClienteDireccion;
    recordatorio?: IClienteRecordatorio;
    fechaNacimiento?: Date | null;
    estado?: TClienteEstado;
    fechaCreacion?: Date;
    fechaEliminacion?: Date | null;
}
