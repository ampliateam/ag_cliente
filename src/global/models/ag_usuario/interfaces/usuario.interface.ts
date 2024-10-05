import { TUsuarioEstado, TUsuarioRol } from "@global/models/ag_usuario";

export interface IUsuario {
  uid: string;
  correo: string;
  codigo: string;
  correoVerificado: boolean;
  nombre: string;
  telefono: string;
  fotoPerfil: string;
  rol: TUsuarioRol[];
  estado: TUsuarioEstado;
  fechaCreacion: Date;
  fechaEliminacion: Date | null;
}

export interface IUsuarioOpcional {
  uid?: string;
  correo?: string;
  codigo?: string;
  correoVerificado?: boolean;
  nombre?: string;
  telefono?: string;
  fotoPerfil?: string;
  rol?: TUsuarioRol[];
  estado?: TUsuarioEstado;
  fechaCreacion?: Date;
  fechaEliminacion?: Date | null;
}
