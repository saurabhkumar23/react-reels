import React, {useContext, useEffect} from "react"
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
	Link,
} from "react-router-dom"
import Feed from "./components/Feed"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import {AuthContext, AuthProvider} from "./contexts/AuthProvider"

function App() {

    useEffect(() => {
        console.log('app >>> useeffect')
    },[])

	return (
		<>
			<AuthProvider>
				<Router>
					<Switch>
						<Route path='/login' component={Login}></Route>
						<Route path='/signup' component={Signup}></Route>
						<PrivateRoute path='/profile' abc={Profile}></PrivateRoute>
						<PrivateRoute path='/' abc={Feed}></PrivateRoute>
					</Switch>
				</Router>
			</AuthProvider>
		</>
	);
}
function PrivateRoute(props) {
    console.log('app >>> privateRoute()')
	let Component = props.abc
	let {currentUser} = useContext(AuthContext)
    console.log('app >>> privateRoute() >>> current user value >>> ', currentUser)

	return (
		<Route
			{...props}
			render={(props) => {
				return currentUser != null ? (
					<Component {...props}></Component>
				) : (
					<Redirect to='/login'></Redirect>
				);
			}}>
        </Route>
	);
}

export default App
