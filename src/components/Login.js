import React,{useContext, useState} from 'react'
import {AuthContext} from '../contexts/AuthContext'

const Login = () => {

    let {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await login(email,password)
        }
        catch(err){
            console.log(err)
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type='button' value='submit' onClick={handleSubmit}/>
        </div>
    )
}

export default Login
