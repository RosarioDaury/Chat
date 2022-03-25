import { createContext, useEffect, useState } from "react";
import {firebase } from "../Sevices/Firebase";

export const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [update, setUpdate] = useState(false);
    const db = firebase.firestore();


    useEffect(() => {
        db.collection('messages').orderBy('createdAt', "asc")
        .get()
        .then(querySnapshot => {
            const data = [];
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            })
            console.log(data);
            setMessages(data)
        })


    }, [update])

    const handleUpdate = () => {
        if(update){
            setUpdate(false)
        }else{
            setUpdate(true)
        }
    }
    

    const data = {messages, handleUpdate};
    

    return <ChatContext.Provider value={data}>{children}</ChatContext.Provider>
}