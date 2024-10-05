import { Schema, model } from 'mongoose';
import { constants } from '@global/configs/constants';
import {
    verificarClienteDucplicadoCreacion,
    verificarClienteDucplicadoActualizacion,
} from './middlewares/cliente';
import {
    ICliente,
    TClienteContacto,
    TClienteDireccion,
    TClienteRecordatorio
} from '@global/models/ag_cliente';

// Definir la interfaz para el documento
interface IClienteMongoose extends Document, Omit<ICliente, '_id'> {};

// Guardar el valor por defecto de cada campo aqui (para los required=false)
const defaultValue = {
    idUsuario: '',
    nota: '',
    direccion: {
        referencia: '',
        ubicacion: [0,0]
    } as TClienteDireccion,
    recordatorio: { 
        recordatorioHabilitado: false,
        recordatorioDobleHabilitado: false,
        tipoMensaje: 'mensaje-corto-1',
        mensaje: '',
    } as TClienteRecordatorio,
    fechaNacimiento: null,
    fechaCreacion: Date.now,
    fechaEliminacion: null,
};

// Schema de mongoose
const ClienteSchema = new Schema<IClienteMongoose>({
    idUsuario: { type: String, required: false, default: defaultValue.idUsuario },
    idProfesional: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    nota: { type: String, required: false, default: defaultValue.nota },
    contactos: { type: Array as unknown as TClienteContacto[], required: true },                                             // IClienteContacto[]
    direccion: { type: Object, required: false, default: defaultValue.direccion },          // IClienteDireccion
    recordatorio: { type: Object, required: false, default: defaultValue.recordatorio },    // IClienteRecordatorio
    fechaNacimiento: { type: Date, required: false, default: defaultValue.fechaNacimiento },
    estado: { type: String, required: true },                                               // TClienteEstado
    fechaCreacion: { type: Date, required: false, default: defaultValue.fechaCreacion },
    fechaEliminacion: { type: Date, required: false, default: defaultValue.fechaEliminacion },
}, { versionKey: false });

// Middleware para creacion
ClienteSchema.pre('save', async function (next) {
    try {
        console.log('proceso [save]');
        await verificarClienteDucplicadoCreacion(this);
        next();
    } catch (error) {
        next(error);
    }
});

// Middleware para todos los tipos de actualizaciones
ClienteSchema.pre('updateOne', async function (next) {
    try {
        console.log('proceso [updateOne]');
        await verificarClienteDucplicadoActualizacion(this);
        next();
    } catch (error) {
        next(error);
    }
});
ClienteSchema.pre('updateMany', async function (next) {
    try {
        console.log('proceso [updateMany]');
        await verificarClienteDucplicadoActualizacion(this);
        next();
    } catch (error) {
        next(error);
    }
});
ClienteSchema.pre('findOneAndUpdate', async function (next) {
    try {
        console.log('proceso [findOneAndUpdate]');
        await verificarClienteDucplicadoActualizacion(this);
        next();
    } catch (error) {
        next(error);
    }
});

export const ClienteModel = model<IClienteMongoose>(
    constants.nombreStore.cliente,
    ClienteSchema
);
