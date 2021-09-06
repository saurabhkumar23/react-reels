import React,{useState,useEffect} from 'react'
import auth from '../firebase'

export const AuthContext = React.createContext()

export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email,password){
        console.log('authProvider >>> login()')
        return auth.signInWithEmailAndPassword(email,password)
    }

    function signout(){
        console.log('authProvider >>> signout()')
        return auth.signOut()
    }

    function signup(email,password) {
        console.log('authProvider >>> signup()')
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        console.log('authProvider >>> useeffect')
        let unsubscribe = auth.onAuthStateChanged = (user) => {
            console.log('authProvider >>> useeffect >>> authStateChangedCallback()')
            console.log('authProvider >>> useeffect >>> authStateChangedCallback() >>> user value : ',user)
            setUser(user)
            setLoading(false)
        }
        return function (){
            console.log('authProvider >>> useeffect >>> cleanup()')
            unsubscribe()
        }
    },[])

    const value = {login,signout,signup,currentUser}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
