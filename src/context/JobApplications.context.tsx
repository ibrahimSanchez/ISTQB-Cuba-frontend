'use client';

// import { Notification } from "@/interfaces";
import { createContext } from "react";



export const JobApplicationsContext = createContext<any>({
    jobApplications: [],
    loadJobApplicationData: true,
    setLoadJobApplicationData: function (value: boolean) {
        return value
    }
})
