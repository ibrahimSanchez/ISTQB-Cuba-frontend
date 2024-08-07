import axios from "axios";


type ReservationData = {
    userId: string,
    curseId: string,
};


export const getReservations = (token: string) => {
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
    // console.log(config)
    return axios.post('http://localhost:8080/api/reservations', data, config)
}
