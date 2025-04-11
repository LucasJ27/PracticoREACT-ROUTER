import { FC } from "react";
import { IEstudiantes } from "../../types/IEstudiantes";
import { useNavigate } from "react-router";

interface IProps {
  id: number;
  nombre: string;
  estudiantes: IEstudiantes[];
}

export const CursoCard: FC<IProps> = ({ id, nombre, estudiantes }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/estudiantes/${id}`);
  };
  return (
    <div className="bg-green-200 flex flex-col justify-between m-6 p-4 w-64 min-h-[250px] rounded-xl shadow-md">
      <div className="flex flex-col gap-2">
        <p>
          CURSO: <b>{id}</b>
        </p>
        <p>
          Nombre: <b>{nombre}</b>
        </p>
        <p>
          Cantidad de alumnos: <b>{estudiantes ? estudiantes.length : 0}</b>
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Ver estudiantes
        </button>
      </div>
    </div>
  );
};
