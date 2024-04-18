import { ErrorCapaDomain } from "@domain/_models";
import { IErrorCapaDomain } from "@domain/_models/interfaces";

export const generarErrorCapaDomain = (error: IErrorCapaDomain): ErrorCapaDomain => {
    return new ErrorCapaDomain({
        estado: error.estado,
        codigo: error.codigo,
        mensaje: error.mensaje,
        resultado: error.resultado
    });
}