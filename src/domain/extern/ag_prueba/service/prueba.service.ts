import { PruebaDTO } from '../dto';
import * as repository from '../respository';

export const prueba = (dto: PruebaDTO): string => {
    return repository.prueba(dto);
}
