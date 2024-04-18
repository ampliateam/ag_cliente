import { IErrorCapaDomain } from "./interfaces";

export class ErrorCapaDomain extends Error implements IErrorCapaDomain {
    public estado: number;
    public codigo: string;
    public mensaje: string;
    public resultado?: any;

    constructor (params: IErrorCapaDomain) {
        super(params.mensaje);
        
        this.estado = params.estado;
        this.codigo = params.codigo;
        this.mensaje = params.mensaje;
        this.resultado = params.resultado;
    }
}