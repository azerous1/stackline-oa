import { LOADING_TIME_MS } from "../constant";
import appDataJSON from "../mock-data/stackline_frontend_assessment_data_2021.json";

export const fetchAppData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data: appDataJSON})
        }, LOADING_TIME_MS);
    }) 
}