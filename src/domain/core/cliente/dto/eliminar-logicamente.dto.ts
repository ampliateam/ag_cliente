import { BuscarClienteDTO } from "./crud.dto";

export interface EliminarLogicamenteClienteDTO {
  buscarPor: BuscarClienteDTO;
  fechaEliminacion: Date;
}