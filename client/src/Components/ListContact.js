import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions"
import CardContact from "./CardContact"

const ListContact=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const contacts = useSelector(state=>state.contacts)
    return(
        <div>
            {
                contacts.map(el=> <CardContact el={el}/>)
            }
        </div>
    )
}

export default ListContact