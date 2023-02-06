import { GETONEUSER, GETUSERS } from "./ActionTypes"

const initialState={
    contacts : [],
    oneContact : {}
}


const Reducer=(state = initialState, action)=>{
    switch (action.type) {
        case GETUSERS : return {...state,contacts : action.payload}
        case GETONEUSER : return {...state, oneContact : action.payload}
        default: return state
    }
}

export default Reducer