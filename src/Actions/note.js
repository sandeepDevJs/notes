import { database } from "../helper"

export const createNoteAction = (data) =>{
    return (dispatch) =>{
        database.push(data)
    }
}