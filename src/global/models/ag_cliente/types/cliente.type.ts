export type TClienteContactoTipo = 'telefono-movil' | 'correo';

export type TClienteEstado = 'habilitado' | 'deshabilitado' | 'eliminado';

export type TClienteMensajeRecordatorioTipo = 'mensaje-corto-1' | 'mensaje-detallado-1' | 'personalizado';

export type TClienteContacto = {
  codigoTelefono: string | null;
  contacto: string;
  tipo: TClienteContactoTipo;
};

export type TClienteDireccion = {
  referencia: string;
  ubicacion: [number, number] | null;
};

export type TClienteRecordatorio = {
  recordatorioHabilitado: boolean;
  recordatorioDobleHabilitado: boolean;
  tipoMensaje: TClienteMensajeRecordatorioTipo;
  mensaje: string;
};
