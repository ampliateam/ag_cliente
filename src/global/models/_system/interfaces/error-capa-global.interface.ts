export interface IErrorCapaGlobal {
  ref: string;
  estado: number;
  codigo: string;
  mensajeServidor: string;
  mensajeCliente: string;
  resultado: any;
};

export interface IErrorCapaGlobalOpcional {
  ref?: string;
  estado?: number;
  codigo?: string;
  mensajeServidor?: string;
  mensajeCliente?: string;
  resultado?: any;
};
