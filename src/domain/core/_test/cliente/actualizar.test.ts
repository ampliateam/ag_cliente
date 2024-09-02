import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";
import { genRanHex } from "@domain/_helpers";
import { testRun } from "../config";

const describeTest = testRun.cliente.actualizar ? describe : describe.skip;
describeTest('CRUD - Cliente', () => {
    const ids = [
        '66d3a93464c593445fabfd25',
        '66d3a986faac560fa14ae5c7',
        // '66ce41cbecb23b2d2f84ab3d',
        // '66ce41edb85df89baf0b5332',
    ];
    const idUsuario = 'xxxx';
    const idProfesional = 'xxxx';

    beforeAll(async () => {    
        await conexionConMongoDB();
    });

    test.skip('Prueba de actualizacion por crud', async () => {
        const id = ids[0];
        const val = `Actualizado por crud - ${genRanHex(24)}`;

        const cliente = await services.core.cliente.crud.actualizar({
            buscarPor: { _id: id },
            actualizado: { nota: val }
        });

        expect(cliente._id).toBe(id);
        expect(cliente.nota).toBe(val);
    });

    test.skip('Prueba de actualizacion por db', async () => {
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

    test.skip('Prueba de actualizacion por db por busqueda de usuario/profesional/estado (estado=habilitado)', async () => {
        const id = ids[2];
        const val = `Actualizado por db - ${genRanHex(24)}`;

        const docs = await services.core.cliente.db.actualizar(
            { idUsuario, idProfesional, estado: 'habilitado' },
            { nota: val }
        );
        const cliente = docs[0];

        expect(1).toBe(docs.length);
        expect(cliente._id).toBe(id);
        expect(cliente.nota).toBe(val);
    });

    test('Prueba de actualizacion para evitar repeticiones por usuario/profesional/estado (estado=habilitado)', async () => {
        const idDuplicar = ids[0];
        const idModificar = ids[1];

        const [docDuplicar] = await services.core.cliente.db.obtener({ _id: idDuplicar });
        if (!docDuplicar) throw new Error('No existe el documento');

        const docs = await services.core.cliente.db.actualizar(
            { _id: idModificar },
            { idUsuario: docDuplicar.idUsuario }
        );
        const clienteModificado = docs[0];

        expect(docs.length).toBe(1);
        expect(clienteModificado._id).toBe(idModificar);
        expect(clienteModificado.idUsuario).toBe(docDuplicar.idUsuario);
    });
});
