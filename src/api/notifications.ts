import axios from "axios";
import { getCookie } from "@/helper";
import { decodeToken } from "react-jwt";



export const getNotifications = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/notifications`, config)
}


export const getNotificationsByUserId = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const id = decodeToken(token).uid;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/notifications/${id}`, config)
}


export const deleteNotification = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/notifications/${id}`, config)
}



export const putNotification = (id: string, view: boolean) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const data = { view };

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`http://localhost:8080/api/notifications/${id}`, data, config)
}


