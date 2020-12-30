import { FETCH_NOTE_DATA } from "../Actions/type";

const fetchNoteReducer = (state=null, action)=>{
    switch (action.type) {
        case FETCH_NOTE_DATA:return action.payload
        default: return state
    }
}

export default fetchNoteReducer