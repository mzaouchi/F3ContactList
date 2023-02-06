import { GETONEUSER, GETUSERS } from "./ActionTypes"
import axios from "axios"
export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/contact/readContacts')
        dispatch({
            type : GETUSERS,
            payload : res.data.contacts

        })
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addContact',newUser)
        dispatch(getUsers())
        navigate('/listcontact')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }
}

export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/readUser/${id}`)
        dispatch({
            type : GETONEUSER,
            payload : res.data.oneContact
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(upContact,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,upContact)
        dispatch(getUsers())
        navigate('/listcontact')
    } catch (error) {
        console.log(error)
    }
}