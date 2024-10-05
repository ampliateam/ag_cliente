import {
  IDatoProveedor,
  IFechaActividad,
  IFirebaseAuthentication,
} from "../types";

export interface IAutenticacionPersona {
  uid: string;
  correo: string; // Mantener sincronizado con la base de datos
  correoVerificado: boolean; // Mantener sincronizado con la base de datos
  deshabilitado: boolean; // Mantener sincronizado con la base de datos
  fechaActividad: IFechaActividad;
  datosProveedor: IDatoProveedor[];
  contrasena: {
    salt: string;
    hash: string;
  };
  fechaVencimientoToken: Date;
  firebaseAuthentication: IFirebaseAuthentication;
}

export interface IAutenticacionPersonaOpcional {
  uid?: string;
  correo?: string; // Mantener sincronizado con la base de datos
  correoVerificado?: boolean; // Mantener sincronizado con la base de datos
  deshabilitado?: boolean; // Mantener sincronizado con la base de datos
  fechaActividad?: IFechaActividad;
  datosProveedor?: IDatoProveedor[];
  contrasena?: {
    salt: string;
    hash: string;
  };
  fechaVencimientoToken?: Date;
  firebaseAuthentication?: IFirebaseAuthentication;
}
