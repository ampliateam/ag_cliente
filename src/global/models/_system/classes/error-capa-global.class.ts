import { IErrorCapaGlobal } from '@global/models/_system';

export class ErrorCapaGlobal extends Error implements IErrorCapaGlobal {
  // Da referencia de forma general donde esta el error
  public ref: string;
  // Estado da referencia al status code
  public estado: number;
  // Codigo da referencia al codigo de error
  public codigo: string;
  // Es el mensaje manejado mas detallado al problema
  public mensajeServidor: string;
  // Es un mensaje simple y amigable para el cliente
  public mensajeCliente: string;
  // Puede ser datos relacionados al error
  public resultado: any;

  constructor(params: IErrorCapaGlobal) {
    super(params.mensajeServidor);

    this.ref = params.ref;
    this.estado = params.estado;
    this.codigo = params.codigo;
    this.mensajeServidor = params.mensajeServidor;
    this.mensajeCliente = params.mensajeCliente;
    this.resultado = params.resultado || null;
  }
  
  toObject (): IErrorCapaGlobal {
    return {
      ref: this.ref,
      estado: this.estado,
      codigo: this.codigo,
      mensajeServidor: this.mensajeServidor,
      mensajeCliente: this.mensajeCliente,
      resultado: this.resultado,
    }
  }
};
