export type TUsuarioEstado = 'habilitado' | 'deshabilitado' | 'eliminado';
export const listaUsuarioEstado: TUsuarioEstado[] = ['habilitado', 'deshabilitado', 'eliminado'];

export type TUsuarioPersonaRol = 'moderador' | 'miembro';
export const listaUsuarioPersonaRol: TUsuarioPersonaRol[] = ['moderador', 'miembro'];

export type TUsuarioExternoRol = 'miembro' | 'servicio';
export const listaUsuarioExternoRol: TUsuarioExternoRol[] = ['miembro', 'servicio'];

export type TUsuarioTipo = 'persona' | 'externo';
export const listaUsuarioTipo: TUsuarioTipo[] = ['persona', 'externo'];
