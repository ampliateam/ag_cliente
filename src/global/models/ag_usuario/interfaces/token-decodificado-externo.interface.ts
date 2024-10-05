export interface ITokenDecodificadoExterno {
    // Identificador de usuario
    sub: string;

    // Nombre de usuario
    name: string;

    // Momento en que el token fue emitido
    iat: number;

    // Entidad que genero el token
    iss: string;

    // Especifica a quién va dirigido el token. 
    // Puede ser un único destinatario o una lista de destinatarios permitidos.
    aud: string | string[];

    // Indica el momento en el que el token dejará de ser válido.
    exp: number;

    // Especifica el tiempo antes del cual el token no debe ser aceptado como válido.
    nbf: string;

    // Proporciona un identificador único para el token JWT.
    // Ayuda a evitar la reutilización del token en escenarios específicos.
    jti: string;

    // Identificador del usuario
    uid: string;
};
