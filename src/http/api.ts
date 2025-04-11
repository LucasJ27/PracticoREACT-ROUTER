import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL_CURSOS;

export const getAllCursos =  async() => {
  try{
    const response = await axios.get(API_URL); 
    return response.data; 
  }catch (error){
    console.log(error);
  }
}

export const getCursoById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el curso con ID ${id}:`, error);
  }
};