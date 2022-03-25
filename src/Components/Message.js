export const Message = ({data, user}) => {
    return(
        <div className={user.uid === data.uid ?"message-user" :"message-outside"}>

            <div className="message-avatar">
                <p className="message-name">{data.displayName}</p>
                <p className="message-message">{data.message}</p>
            </div>
            <img src={data.photoURL} alt="avatar"/>
            
        </div>
    )
}