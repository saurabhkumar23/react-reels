import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Feed from './components/Feed'
import Login from './components/Login'
import Signup from './components/Signup'
import {AuthProvider} from './contexts/AuthContext'

function App() {
	return(
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/" exact component={Feed}/>
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </div>;
    ) 
}

export default App;
