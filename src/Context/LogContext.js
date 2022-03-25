import { createContext, useEffect, useState} from "react";
import {firebase } from "../Sevices/Firebase";

export const LogContext = createContext();

export const LogProvider = ({children}) => {
    const [user, setUser] = useState(false);

    const handleLogIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        try {
            await firebase.auth().signInWithPopup(provider)
        } catch {
            console.log("Error longing in")
        }
    }

    const handleLogOut = async () => {
        try{
            await firebase.auth().signOut();
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if(user){
                setUser(user)
            }else{
                setUser(false)
            }
        })

        return unsubscribe;
    },[user])

    const data = {user, handleLogIn, handleLogOut};
    return <LogContext.Provider value={data}>{children}</LogContext.Provider>
}