import { database } from "../helper"
import { FETCH_NOTE_DATA } from "./type"
export const createNoteAction = (data) =>{
    return (dispatch) =>{
        database.push(data)
    }
}

export const fetchNotesAction = () =>{
    return (dispatch) =>{
        database.on("value", snapshot => {
            let data = snapshot.val()
            dispatch({type: FETCH_NOTE_DATA, payload: data})
        })
    }
}