import { Schema, model } from 'mongoose';
import { constants } from '@global/configs/constants';

const ParametroSistemaSchema = new Schema({
    parametroBusqueda: { type: String, required: true, unique: true },
    valor: { type: String, required: true },
    observacion: { type: String, required: true },
}, { versionKey: false });

export const ParametroSistemaModel = model(constants.nombreStore.parametroSistema, ParametroSistemaSchema);
