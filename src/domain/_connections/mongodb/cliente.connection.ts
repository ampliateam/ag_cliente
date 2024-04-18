import { Schema, Types, model } from 'mongoose';
import { constants } from '@global/configs/constants';

// Guardar el valor por defecto de cada campo aqui
const defaultValue = {
    nota: '',
    direccion: { referencia: '', ubicacion: [0,0] },
    recordatorio: { 
        recordatorioHabilitado: false,
        recordatorioDobleHabilitado: false,
        tipoMensaje: 'mensaje-corto-1',
        mensaje: '',
    },
    fechaNacimiento: null,
    fechaEliminacion: null,
};

const ClienteSchema = new Schema({
    idUsuario: { type: String, required: true },
    idProfesional: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    nota: { type: String, required: false, default: defaultValue.nota },
    contactos: { type: Array, required: true },                                             // IClienteContacto[]
    direccion: { type: Object, required: false, default: defaultValue.direccion },          // IClienteDireccion
    recordatorio: { type: Object, required: false, default: defaultValue.recordatorio },    // IClienteRecordatorio
    fechaNacimiento: { type: Date, required: false, default: defaultValue.fechaNacimiento },
    estado: { type: String, required: true },                                               // TClienteEstado
    fechaCreacion: { type: Date, required: true },
    fechaEliminacion: { type: Date, required: false, default: defaultValue.fechaEliminacion },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
});

// Duplicate the ID field.
ClienteSchema.virtual('id').set(function(v: string){
    this._id = new Types.ObjectId(v);
});
ClienteSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

export const ClienteModel = model(constants.nombreStore.cliente, ClienteSchema);
