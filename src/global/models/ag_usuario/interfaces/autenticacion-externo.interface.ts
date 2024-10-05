import { TAutenticacionExternoTipo } from '../types';

export interface IAutenticacionExterno {
  uid: string;
  clavePrivada: string;
  clavePublica: string;
  estado: TAutenticacionExternoTipo;
  fechaCreacion: Date;
  fechaEliminacion: Date;
};

export interface IAutenticacionExternoOpcional {
  uid?: string;
  clavePrivada?: string;
  clavePublica?: string;
  estado?: TAutenticacionExternoTipo;
  fechaCreacion?: Date;
  fechaEliminacion?: Date;
};
