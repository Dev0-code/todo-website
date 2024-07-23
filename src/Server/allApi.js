import { base_Url } from "./base_Url";
import commonApi from "./CommonApi";


export const getAllTasks =async () =>{
    return await commonApi ('GET' , `${base_Url}/task`,'')
}
export const addNewTask =async (data) =>{
    return await commonApi ('POST' , `${base_Url}/task`,data)
}
export const getSpecificTask =async (id) =>{
    return await commonApi ('GET' , `${base_Url}/task/${id}`,'')
}
export const markAsCompleted =async (id,data) =>{
    return await commonApi ('PUT' , `${base_Url}/task/${id}`, data)
}
export const deleteTask =async (id) =>{
    return await commonApi ('DELETE' , `${base_Url}/task/${id}`,{})
}