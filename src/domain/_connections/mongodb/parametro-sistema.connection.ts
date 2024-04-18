import { Schema, Types, model } from 'mongoose';
import { constants } from '@global/configs/constants';

const ParametroSistemaSchema = new Schema({
    parametroBusqueda: { type: String, required: true, unique: true },
    valor: { type: String, required: true },
    observacion: { type: String, required: true },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
});

// Duplicate the ID field.
ParametroSistemaSchema.virtual('id').set(function(v: string){
    return this._id = new Types.ObjectId(v);
});
ParametroSistemaSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

export const ParametroSistemaModel = model(constants.nombreStore.parametroSistema, ParametroSistemaSchema);
