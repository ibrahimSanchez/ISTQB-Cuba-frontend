import { authTypes } from "@/types";



export const authReducer = (state = {}, action: any) => {


    switch (action.type) {
        case authTypes.login:

            return {
                ...action.payload,
                logged: true
            }

        case authTypes.logout:

            return {
                logged: false,
                tokenAccess: '',
                role: ''
            }

        default:
            return state;
    }
}