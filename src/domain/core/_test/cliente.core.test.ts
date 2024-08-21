import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";
import { genRanHex } from "@domain/_helpers";

describe('CRUD - Cliente', () => {
    const ids = [
        '66c54b059a6fabf38c573ca4',
        '66c54b2d5f9fde26e57df10c',
    ];
    const idsEliminacion = [
        '66c54b059a6fabf38c573ca4',
        '66c54b2d5f9fde26e57df10c',
    ];
    const nombre = 'Nombre6';
    const apellido = 'Apellido6';
    const nota = 'IKien+?';

    beforeAll(async () => {    
        await conexionConMongoDB();
    });

    test.skip('Crear cliente', async () => {
        const clienteNuevo = await services.core.cliente.crud.crear({
            cliente: {
                idUsuario: 'bbbbbbb00000000000000006',
                idProfesional: 'ccccccccccc0000000000006',
                nombre,
                apellido,
                nota,
                contactos: [{ codigoTelefono: 'PY', contacto: '+595 982139653', tipo: 'telefono-movil', prioridad: 'principal' }],
                direccion: { referencia: 'Por Ahi Nomas', ubicacion: [1,1] },
                recordatorio: { recordatorioHabilitado: false, recordatorioDobleHabilitado: false, tipoMensaje: 'mensaje-corto-1', mensaje: '' },
                fechaNacimiento: new Date('2000-05-16'),
                estado: 'habilitado',
                fechaCreacion: new Date('2023-05-10'),
                fechaEliminacion: null
            }
        });

        expect(clienteNuevo._id).toBeTruthy();
    });
    
    test.skip('Obtener cliente por crud', async () => {
        const id = ids[0];
        const doc = await services.core.cliente.crud.obtener({ _id: id });
        
        expect(doc._id).toBe(id);
    });

    test.skip('Obtener cliente por db - 0', async () => {
        const id = ids[0];
        const docs = await services.core.cliente.db.obtener({ _id: id });

        docs.map(v => {
            expect(ids).toContain(v._id);
        });
    });

    test.skip('Obtener cliente por db - 1', async () => {
        const docs = await services.core.cliente.db.obtener({
            nombre,
            apellido,
            nota,
            estado: 'habilitado',
        });

        docs.map(v => {
            expect(ids).toContain(v._id);
        });
    });

    test.skip('Obtener cliente por db - 2', async () => {
        const docs = await services.core.cliente.db.obtener({
            _id: { '$in': ids }
        });

        docs.map(v => {
            expect(ids).toContain(v._id);
        });
    });

    test.skip('Actualizar cliente por crud', async () => {
        const id = ids[0];
        const val = `Actualizado por crud - ${genRanHex(24)}`;

        const cliente = await services.core.cliente.crud.actualizar({
            buscarPor: { _id: id },
            actualizado: { nota: val }
        });

        expect(cliente._id).toBe(id);
        expect(cliente.nota).toBe(val);
    });

    test.skip('Actualizar cliente por db', async () => {
        const id = ids[1];
        const val = `Actualizado por db - ${genRanHex(24)}`;

        const docs = await services.core.cliente.db.actualizar(
            { _id: id },
            { nota: val }
        );
        const cliente = docs[0];

        expect(cliente._id).toBe(id);
        expect(cliente.nota).toBe(val);
    });

    test('Eliminar cliente', async () => {
        // Eliminamos los usuarios de prueba
        const docs = await services.core.cliente.db.obtener({
            _id: { '$in': idsEliminacion }
        });

        if (docs && docs.length) {
            docs.map(async doc => {
                const docEliminado = await services.core.cliente.eliminarLogicamente({
                    buscarPor: { _id: doc._id },
                    fechaEliminacion: new Date()
                });

                expect(idsEliminacion).toContain(docEliminado._id);
            });
        }
    });
    
});
