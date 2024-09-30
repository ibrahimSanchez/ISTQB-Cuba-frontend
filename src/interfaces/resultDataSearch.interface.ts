import { Certification } from "./certification.interface";
import { User } from "./user.interface";
import { User_certification } from "./user_certification.interface";



export interface ResultDataSearch {
    user_certifications?: User_certification[];
    users?: User[];
    certifications?: Certification[];
} 