import { combineReducers } from "redux"
import fetchNoteReducer from "../Reducers/note"
const reducer = combineReducers({notes: fetchNoteReducer})
export default reducer