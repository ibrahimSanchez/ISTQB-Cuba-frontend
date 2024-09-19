import axios from "axios";
import { getCookie } from "@/helper";


type ReservationData = {
    userId: string,
    certificationId: string,
};


export const getReservations = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get('http://localhost:8080/api/reservations', config)
}



export const postReservations = (data: ReservationData, token: string) => {
    
    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.post('http://localhost:8080/api/reservations', data, config)
}



export const putReservation = (id: string, data: {}) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`http://localhost:8080/api/reservations/${id}`, data, config)
}



export const deleteReservation = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/reservations/${id}`, config)
}



export const deleteArrayReservation = (data: string[]) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token,
        },
        data: {
            data
        }
    };
    return axios.delete(`http://localhost:8080/api/reservations`, config)
}

