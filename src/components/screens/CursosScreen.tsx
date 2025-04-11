import { useEffect, useState } from "react";
import { CursoCard } from "../ui/CursoCard";
import { ICursos } from "../../types/ICursos";
import { getAllCursos } from "../../http/api";

export const CursosScreen = () => {
    const [cursos, setCursos] = useState<ICursos[]>([]);
    useEffect(() => {
      const getCursos = async () => {
        const data = await getAllCursos();
        if (data) setCursos(data);
      };
  
      getCursos();
    }, []);

    return (
      <div className="bg-white min-h-screen">
        <div className="bg-green-200 flex justify-center items-center py-3">
          <h1 className="text-black text-4xl font-bold">CURSOS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 justify-items-center">
  {cursos.map((curso) => (
    <CursoCard
      key={curso.id}
      id={curso.id}
      nombre={curso.nombre}
      estudiantes={curso.estudiantes}
    />
  ))}
</div>

      </div>
    );
  };
  
  export default CursosScreen;