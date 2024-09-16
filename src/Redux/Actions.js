import { ADDTASK, DELETETASK, HANDLEDONE } from "./ActionTypes"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}

export const handleDone=(payload)=>{
    return(
        {
            type : HANDLEDONE,
            payload
        }
    )
}

export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}