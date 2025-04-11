import { FC } from "react";
import { IEstudiantes } from "../../types/IEstudiantes";

interface IProps {
  estudiante: IEstudiantes;
}

export const EstudianteCard: FC<IProps> = ({ estudiante }) => {
  return (
    <div className="bg-green-200 flex flex-col justify-between m-4 p-4 w-64 min-h-[200px] rounded-xl shadow-md">
      <div className="flex flex-col gap-2">
        <p>
          Nombre: <b>{estudiante.nombre}</b>
        </p>
        <p>
          Edad: <b>{estudiante.edad}</b>
        </p>
        <p>
          ID: <b>{estudiante.id}</b>
        </p>
      </div>
    </div>
  );
};

export default EstudianteCard;
