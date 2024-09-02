export async function verificarClienteDucplicadoCreacion(ctx: any) {
  // Verificar si el cliente es un cliente duplicado por [idUsuario, idProfesional, estado]
  const model = ctx.model();
  let msgError = '';
  
  const estados = ['habilitado', 'deshabilitado'];
  const verificar = ctx.idUsuario && ctx.idUsuario !== '' && estados.includes(ctx.estado);
  if (!verificar) return;

  const clienteExistente = await model.findOne({
    idUsuario: ctx.idUsuario,
    idProfesional: ctx.idProfesional,
    estado: { $in: estados },
  });
  if (!clienteExistente) return;

  msgError = 'El profesional ya tiene a este usuario como cliente';
  throw new Error(msgError);
};

export async function verificarClienteDucplicadoActualizacion(ctx: any) {
  const model = ctx.model;
  let msgError = '';

  const query = ctx.getQuery();
  const update = ctx.getUpdate();
  console.log('query', query);
  console.log('update', update);

  // Verificar si existe el cliente
  const clienteExistente = await model.findOne(query);
  if (!clienteExistente) {
    msgError = 'No existe el cliente.';
    throw new Error(msgError);
  }

  // Verifica si se intenta actualizar `idUsuario` o `estado`
  const newIdUsuario = update.idUsuario || (update.$set && update.$set.idUsuario);
  const newEstado = update.estado || (update.$set && update.$set.estado);

  if (newIdUsuario || (newEstado && newEstado !== 'eliminado')) {
    const estadosParaVerificar = ['habilitado', 'deshabilitado'];

    // Verifica si ya existe otro documento con el mismo idUsuario, idProfesional y estado 'habilitado'
    const clienteExistente2 = await model.findOne({
      _id: { $ne: clienteExistente._id }, // Excluye el documento actual
      idUsuario: newIdUsuario || clienteExistente.idUsuario,
      idProfesional: clienteExistente.idProfesional,
      estado: { $in: estadosParaVerificar },
    });

    if (!clienteExistente2) return;

    msgError = 'Cliente duplicado por [idUsuario, idProfesional, estado].';
    throw new Error(msgError);
  }
};
