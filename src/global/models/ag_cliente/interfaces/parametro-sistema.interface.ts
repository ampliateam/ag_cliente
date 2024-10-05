export interface IParametroSistema {
  _id: string;
  parametroBusqueda: string;
  valor: string;
  observacion: string;
};

export interface IParametroSistemaOpcional {
  _id?: string;
  parametroBusqueda?: string;
  valor?: string;
  observacion?: string;
};
