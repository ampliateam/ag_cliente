import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe('CRUD - Cliente', () => {
    const id = 'aaaaaaa00000000000000002';
    const nombre = 'Cris';
    const apellido = 'Velazquez';

    beforeAll(async () => {    
        await conexionConMongoDB();
        
        // Eliminamos los usuarios de prueba
        const clienteExistente = await services.core.cliente.crud.obtener({ nombreApellido: { nombre, apellido } });
        if (clienteExistente) {
            await services.core.cliente.eliminarLogicamente({
                buscarPor: { nombreApellido: { nombre, apellido } },
                fechaEliminacion: new Date()
            });
        }

        const clienteNuevo = await services.core.cliente.crud.crear({
            cliente: {
                id,
                idUsuario: 'bbbbbbb00000000000000002',
                idProfesional: 'ccccccccccc0000000000002',
                nombre,
                apellido,
                nota: 'IKien+?',
                contactos: [{ codigoTelefono: 'PY', contacto: '+595 982139653', tipo: 'telefono-movil', prioridad: 'principal' }],
                direccion: { referencia: 'Por Ahi Nomas', ubicacion: [1,1] },
                recordatorio: { recordatorioHabilitado: false, recordatorioDobleHabilitado: false, tipoMensaje: 'mensaje-corto-1', mensaje: '' },
                fechaNacimiento: new Date('2000-05-16'),
                estado: 'habilitado',
                fechaCreacion: new Date('2023-05-10'),
                fechaEliminacion: null
            }
        });

        expect(clienteNuevo.id).toEqual(id);
    });
    
    test('Obtener cliente', async () => {
        const cliente = await services.core.cliente.crud.obtener({ nombreApellido: { nombre, apellido } });

        expect(cliente.id).toEqual(id);
    });

    test.skip('Obtener lista cliente', async () => {
        const listaIdCliente = [id];
        const listaCliente = await services.core.cliente.obtenerListaPorIds(listaIdCliente);

        for (const id of listaIdCliente) {
            expect(listaCliente.find(v => v.id === id)?.id || '').toEqual(id);
        }
    });

    test.skip('Actualizar cliente', async () => {
        const cliente = await services.core.cliente.crud.obtener({ nombreApellido: { nombre, apellido } });

        expect(cliente.id).toEqual(id);
    });
    
});
