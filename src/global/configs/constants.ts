import { envs } from "./envs";

const constantes = {
    codigoServicioPrincipal: 'ag_cliente',
    nombreStore: {
        parametroSistema: 'ParametrosSistema',
        cliente: 'Clientes',
    },
    parametroBusqueda: {
        baseUrlAgUsuario: 'base_url_ag_usuario',
        baseUrlAgCliente: 'base_url_ag_cliente'
    }
};

if (envs.modoTest) {
    constantes.nombreStore.parametroSistema += '_test';
    constantes.nombreStore.cliente += '_test';
}

export const constants = constantes;