export interface OperacionRegistroAlgoliaDTO {
  data: any,
  operacion: 'crear' | 'actualizar' | 'eliminar',
  tipoRegistro: 'cliente' | ''
};
