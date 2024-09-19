import axios from "axios";
import { getCookie } from "@/helper";
import { JobApplication } from "@/interfaces";
import { decodeToken } from "react-jwt";



export const getJobApplications = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/jobApplications`, config)
}



export const postJobApplication = (data: JobApplication) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const { uid }: any = decodeToken(token);

    data.userId = uid.toString();

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/jobApplications`, data, config)
}


export const deleteJobApplication = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/jobApplications/${id}`, config)
}



export const deleteArrayJobApplication = (data: string[]) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token,
        },
        data: {
            data
        }
    };
    return axios.delete(`http://localhost:8080/api/jobApplications`, config)
}



export const putJobApplication = (id: string, data: {}) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`http://localhost:8080/api/jobApplications/${id}`, data, config)
}



export const getJobApplicationById = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/jobApplications/${id}`, config)
}

