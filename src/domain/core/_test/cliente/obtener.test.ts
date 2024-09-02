import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";
import { testRun } from "../config";

const describeTest = testRun.cliente.obtener ? describe : describe.skip;
describeTest('CRUD - Cliente', () => {
    const ids = [
        '66ce41157797370411010988',
        '66ce41bbcaafc99795b1b7ab',
        '66ce41cbecb23b2d2f84ab3d',
        '66ce41edb85df89baf0b5332',
    ];
    const idUsuario = '65988026151cbcd32c465405';   // id de usuario del nro 2
    const idProfesional = '66cd19426e872951ab59711f';

    beforeAll(async () => {    
        await conexionConMongoDB();
    });
    
    test('obtener | cliente | crud', async () => {
        const _id = ids[0];
        const doc = await services.core.cliente.crud.obtener({ _id });
        
        expect(doc._id).toBe(_id);
    });

    test('obtener | cliente | db-0', async () => {
        const _id = ids[1];
        const [doc] = await services.core.cliente.db.obtener({ _id });

        expect(_id).toBe(doc._id);
        expect(ids).toContain(doc._id);
    });

    test('obtener | cliente | db-1', async () => {
        const docs = await services.core.cliente.db.obtener({
            idUsuario,
            idProfesional,
            estado: 'habilitado',
        });
        const doc = docs[0];

        expect(1).toBe(docs.length);
        expect(ids).toContain(doc._id);
    });

    test('obtener | cliente | db-2', async () => {
        const docs = await services.core.cliente.db.obtener({
            _id: { '$in': ids }
        });

        docs.map(v => {
            expect(ids).toContain(v._id);
        });
    });

});
