import axios from "axios"
import { Asistencia } from "@/types/adminTypes/asistencia"
const API_URL = "http://localhost:3000/admin"

export const getAllAlumnosWithAsistencias = async () => {
    const response = await axios.get(`${API_URL}/asistencias/`)
    return response.data
}

export const getAsistenciasByAlumnoId = async (id: number) => {
    const response = await axios.get(`${API_URL}/asistencias/alumno/${id}`)
    return response.data
}

export const createAsistencia = async (data: Asistencia) => {
    const response = await axios.post(`${API_URL}/asistencias`, data)
    return response.data
}

export const getRecentAttendance = async () => {
    const response = await axios.get(`${API_URL}/asistencias/recientes`)
    return response.data
}


export const deleteAsistencia = async (id: number) => {
    const response = await axios.delete(`${API_URL}/asistencias/${id}`)
    return response.data
}
