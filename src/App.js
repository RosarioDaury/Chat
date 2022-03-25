import { useContext } from "react";
import { Channel } from "./Components/Chanel";
import { LogIn } from "./Components/LogIn";
import { ChatProvider } from "./Context/ChatContext";
import { LogContext } from "./Context/LogContext";

function App() {
  const {user} = useContext(LogContext)
  return (
    <div>
      {!user 
        ?
          <LogIn/>
        :
          <ChatProvider>
            <Channel/>
          </ChatProvider>
          
      }
    </div>
  );
}

export default App;
