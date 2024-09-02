/*
DATOS DE PRUEBA
------------------------------------------------------------
const nombre = 'Roberto';
const apellido = 'Amarilla';
const nota = 'Hermano de Faby';
const idProfesional = '66cd19426e872951ab59711f';
const referencia = 'Av. Zavalas Cué, Fernando de la Mora';
const contacto = '982000000';

const nombre = 'Jessica';
const apellido = 'Alarcon';
const nota = 'La mejor novia del mundo pero no quiere jugar AOM :c';
const idProfesional = '66cd19426e872951ab59711f';
const referencia = 'Ruta Mariscal José Felix Estigarribia, Fernando de la Mora';
const contacto = '982000001';

const nombre = 'Guillermo';
const apellido = 'Paiva';
const nota = 'Yo ya quiero jugar AOM';
const idProfesional = '66cd19426e872951ab59711f';
const referencia = 'Paseo La Galería, Avenida Santa Teresa, Asunción';
const contacto = '982000002';

const nombre = 'Cristhian';
const apellido = 'Vazquez';
const nota = 'Laloli';
const idProfesional = '66cd19426e872951ab59711f';
const referencia = 'Paseo La Galería, Avenida Santa Teresa, Asunción';
const contacto = '982000003';
*/

import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";
import { testRun } from "../config";

const describeTest = testRun.cliente.crear ? describe : describe.skip;
describeTest('CRUD - Cliente', () => {
    const nombre = 'Jessica';
    const apellido = 'Alarcon';
    const nota = 'La mejor novia del mundo pero no quiere jugar AOM :c';
    const idProfesional = '66cd19426e872951ab59711f';
    const referencia = 'Ruta Mariscal José Felix Estigarribia, Fernando de la Mora';
    const contacto = '982000001';

    beforeAll(async () => {    
        await conexionConMongoDB();
    });

    test('Crear cliente', async () => {
        const clienteNuevo = await services.core.cliente.crud.crear({
            cliente: {
                idUsuario: '',
                idProfesional,
                nombre,
                apellido,
                nota,
                contactos: [{ codigoTelefono: '+595', contacto, tipo: 'telefono-movil' }],
                direccion: { referencia, ubicacion: [1,1] },
                recordatorio: {
                    recordatorioHabilitado: false,
                    recordatorioDobleHabilitado: false,
                    tipoMensaje: 'mensaje-corto-1',
                    mensaje: ''
                },
                fechaNacimiento: new Date('2000-05-16'),
                estado: 'habilitado',
            }
        });

        expect(clienteNuevo).toBeTruthy();
        expect(nombre).toBe(clienteNuevo.nombre);
        expect(apellido).toBe(clienteNuevo.apellido);
        expect(nota).toBe(clienteNuevo.nota);
        expect(idProfesional).toBe(clienteNuevo.idProfesional);
        expect(referencia).toBe(clienteNuevo.direccion.referencia);
        expect(contacto).toBe(clienteNuevo.contactos[0].contacto);
    });
});
