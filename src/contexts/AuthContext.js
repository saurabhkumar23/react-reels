import React,{useState} from 'react'
import auth from '../firebase'

export const AuthContext = React.createContext()

export function AuthProvider({children}){

    const [currentUser, setUser] = useState(null)
    const [currentUser, setUser] = useState(null)

    async function login(email,password){
        return await auth.signInWithEmailAndPassword(email,password)
    }

    async function signOut(){
        return await auth.signOut()
    }

    const value = {login,signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

