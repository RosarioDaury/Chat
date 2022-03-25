import { useContext } from "react"
import { LogContext } from "../Context/LogContext"

export const LogOut = () => {
    const {handleLogOut} = useContext(LogContext);
    return(
        <div className="logout">
            <h3>Chat Application</h3>
            <button onClick={handleLogOut}>Log Out</button>    
        </div>
    )
}