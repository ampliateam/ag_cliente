export type IFechaActividad = {
  fechaCreacion: Date;
  fechaUltimoInicioSesion?: Date | null;
  fechaUltimoMomentoActivo?: Date | null;
};

export type IDatoProveedor = {
  uid: string;
  nombre: string;
  correo: string;
  fotoPerfil: string;
  proveedorID: string;
  telefono: string;
};

export type IFirebaseAuthentication = {
  // Objeto original de usuario de Firebase Authentication
  userRecord: any;
};
