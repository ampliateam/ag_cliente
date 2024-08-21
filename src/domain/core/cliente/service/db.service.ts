import { ICliente } from "@global/models/interfaces";
import * as repository from "../repository/mongodb";
import { services } from "@domain/services";

export const obtener = async (dto: any): Promise<ICliente[]> => {
  return await repository.db.obtener(dto);
};

export const actualizar = async (dto: any, data: any): Promise<ICliente[]> => {
  const actualizados = await repository.db.actualizar(dto, data);

  actualizados.map(async (v) => {
    await services.extern.algolia.operacionRegistroAlgolia({
      data: {
        ...data,
        _id: v._id,
      },
      operacion: "actualizar",
      tipoRegistro: "cliente",
    });
  });

  return actualizados;
};

export const obtenerPorID = async (id: string) => {
  return await repository.db.obtenerPorID(id);
};

export const actualizarPorID = async (dto: any, data: any) => {
  const actualizado = await repository.db.actualizarPorID(dto, data);

  await services.extern.algolia.operacionRegistroAlgolia({
    data: {
      ...data,
      _id: actualizado._id,
    },
    operacion: "actualizar",
    tipoRegistro: "cliente",
  });

  return actualizado;
};
