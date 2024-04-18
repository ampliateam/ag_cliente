import { TUsuarioEstado, TUsuarioExternoRol, TUsuarioPersonaRol } from '@global/models/types';

export interface IUsuarioPersona {
    uid: string;
    correo: string;
    codigo: string;
    correoVerificado: boolean;
    nombre: string;
    telefono: string;
    fotoPerfil: string;
    rol: TUsuarioPersonaRol[];
    estado: TUsuarioEstado;
    fechaCreacion: Date;
    fechaEliminacion: Date | null;
}

export interface IUsuarioExterno {
    uid: string;
    codigo: string;
    observacion: string;
    correo: string;
    telefono: string;
    rol: TUsuarioExternoRol[];
    estado: TUsuarioEstado;
    fechaCreacion: Date;
    fechaEliminacion: Date | null;
}
