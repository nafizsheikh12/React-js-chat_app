import {React} from 'react'
import "./message.css"

const Message = ({messag,username}) => {
    const isUser = messag.username === username;

   return (
       <> 
         <div className={`message ${isUser && "message_user"}`}>
         
           <h1>{messag.username}:{messag.message}</h1>
         </div>
       </>
   )
}

export default Message;