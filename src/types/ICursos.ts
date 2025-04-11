import {IEstudiantes} from "./IEstudiantes";

export interface ICursos {
  id: number;
  nombre: string;
  estudiantes: IEstudiantes[];
}
