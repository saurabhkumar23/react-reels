import React,{useContext, useState} from 'react'
import {AuthContext} from '../contexts/AuthProvider'

const Login = (props) => {

    useEffect(() => {
        console.log('login >>> useeffect')
    },[])

    let {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)

    const handleSubmit = async(e) => {
        console.log('login >>> handlersubmit()')
        e.preventDefault()
        try{
            setLoader(true)
            let res = await login(email, password)
            console.log('login >>> handlersubmit() >>> user log in success!')
            setLoader(false)
            props.history.push("/")
        }
        catch(err){
            console.log('login >>> handlersubmit() >>> user log in failure!')
            setError(true)
            setLoader(false)
            setEmail("")
            setPassword("")
        }
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
