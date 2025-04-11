import { Navigate, Route, Routes } from "react-router"
import CursosScreen from "../components/screens/CursosScreen"
import EstudiantesScreen from "../components/screens/EstudiantesScreen"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/cursos"/>}/>
        <Route path="/cursos" element={<CursosScreen />} />
        <Route path="/estudiantes/:cursoId" element={<EstudiantesScreen />} />
      </Routes>
    </>
  )
}

export default AppRouter