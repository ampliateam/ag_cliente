import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";
import { testRun } from "../config";

const describeTest = testRun.cliente.eliminar ? describe : describe.skip;
describeTest('CRUD - Cliente', () => {
    const ids = [
        '66ce41edb85df89baf0b5332',
    ];

    beforeAll(async () => {    
        await conexionConMongoDB();
    });

    test('Eliminar cliente', async () => {
        // Eliminamos los usuarios de prueba
        const docs = await services.core.cliente.db.obtener({
            _id: { '$in': ids }
        });

        if (docs && docs.length) {
            docs.map(async doc => {
                const docEliminado = await services.core.cliente.eliminarLogicamente({
                    buscarPor: { _id: doc._id },
                    fechaEliminacion: new Date()
                });

                expect(ids).toContain(docEliminado._id);
            });
        }
    });
    
});
