import { useContext, useRef, useState } from "react"
import { ChatContext } from "../Context/ChatContext";
import { LogContext } from "../Context/LogContext";
import {firebase } from "../Sevices/Firebase";
import { Message } from "./Message";

export const Chat = () => {
    const [newMessage, setNewMessage] = useState("");
    const {messages, handleUpdate} = useContext(ChatContext);
    const {user} = useContext(LogContext);

    const {uid, displayName, photoURL} = user

    const bottomChat = useRef();

    console.log(bottomChat.current)

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!newMessage){
            return
        }

        const textTrimmed = newMessage.trim(); 

        await firebase.firestore().collection('messages').add({
            message : textTrimmed,
            createdAt: Date.now(),
            uid,
            displayName,
            photoURL
        });

        setNewMessage("");
        handleUpdate();
        setTimeout(() => {
            bottomChat.current.scrollIntoView({behavior:"smooth"})
        }, 1000);
    }

    return(
        <div>
            <div className="chat-conteiner">
                <div className="chat-beginning-conteiner">
                    <br/>
                    <div className="chat-beginning">
                        <h2>Welcome to React Chat With FireBase</h2>
                        <br/>
                        <img src={photoURL} alt="avatar" style={{width:"80px", height:"80px", borderRadius:"50%"}}/>
                        <h4>{displayName}</h4>
                    </div>
                    <br/>
                    <hr/>
                </div>
                {messages 
                ? messages.map(message => <Message key={message.createdAt} data={message} user={user}/>) 
                :<div></div> }  
                <br/>
                <br/> 
                <div ref={bottomChat}/>
            </div>
            <form onSubmit={handleSubmit} className="form-chat">
                <input type="text" placeholder="Write you message..." onChange={handleChange} value={newMessage}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}