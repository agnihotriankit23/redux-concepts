import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { login ,logout} from "../store";

export const Login = ()=>{
    const [newUserName, setNewUsername] = useState("")

    const dispatch = useDispatch();

    const username = useSelector((state:any)=>
        state.user.value.username
    )
    return (
        <h1>{username}

            <input onChange={(e)=>{
                setNewUsername(e.target.value)
            }}/>
            <button onClick={()=>dispatch(login({username:newUserName}))}>Submit Login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </h1>
        
    )
    
}