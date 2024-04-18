export interface IFechaActividad {
    fechaCreacion: Date;
    fechaUltimoInicioSesion?: Date | null;
    fechaUltimoMomentoActivo?: Date | null;
}

export interface IDatoProveedor {
    uid: string;
    nombre: string;
    correo: string;
    fotoPerfil: string;
    proveedorID: string;
    telefono: string;
}

export interface IFirebaseAuthentication {
    // Objeto original de usuario de Firebase Authentication
    userRecord: any;
}

export interface IAutenticacionPersona {
    uid: string;
    correo: string;             // Mantener sincronizado con la base de datos
    correoVerificado: boolean;  // Mantener sincronizado con la base de datos
    deshabilitado: boolean;     // Mantener sincronizado con la base de datos
    fechaActividad: IFechaActividad;
    datosProveedor: IDatoProveedor[];
    contrasena: {
        salt: string,
        hash: string
    };
    fechaVencimientoToken: Date;
    firebaseAuthentication: IFirebaseAuthentication;
}

export interface IAutenticacionExterno {
    uid: string;
    codigo: string;
    deshabilitado: boolean;     // Mantener sincronizado con la base de datos
    contrasena: {
        salt: string,
        hash: string
    };
    fechaActividad: IFechaActividad;
    fechaVencimientoToken: Date;
}
