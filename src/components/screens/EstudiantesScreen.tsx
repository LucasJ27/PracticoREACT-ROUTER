import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { IEstudiantes } from "../../types/IEstudiantes";
import { getCursoById } from "../../http/api";
import EstudianteCard from "../ui/EstudiantesCard";

const EstudiantesScreen = () => {
  const { cursoId } = useParams();
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState<IEstudiantes[]>([]);
 
  useEffect(() => {
    const getEstudiantes = async () => {
      const data = await getCursoById(Number(cursoId));
      if (data?.estudiantes) setEstudiantes(data.estudiantes);
    };

    getEstudiantes();
  }, [cursoId]);



  return (
    <div className="bg-white min-h-screen relative">
      <button
        onClick={() => navigate("/cursos")}
        className="absolute top-4 left-4 bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md"
      >
        Volver a los cursos
      </button>
      <div className="bg-green-200 flex justify-center items-center py-3">
        <h1 className="text-black text-4xl font-bold">
          ESTUDIANTES DEL CURSO {cursoId}
        </h1>
      </div>
      {estudiantes.length === 0 ? (
        <p className="text-center mt-6">No hay estudiantes en este curso.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-6">
          {estudiantes.map((alumno) => (
            <EstudianteCard key={alumno.id} estudiante={alumno} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EstudiantesScreen;
