import { useContext } from "react";
import { LogContext } from "../Context/LogContext";

const LogIn = () => {    
    const {handleLogIn} = useContext(LogContext);

    return(
        <div className="login">
            <div className="chat-beginning-conteiner">
                <div className="chat-beginning">
                    <h2>Welcome to React Chat With FireBase</h2>
                </div>
            </div>
            <button onClick={handleLogIn}>Log In</button>
        </div>
    )
}

export {LogIn};