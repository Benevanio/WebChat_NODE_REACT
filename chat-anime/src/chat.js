import React, { useEffect } from 'react'
import { useState } from 'react'
function Chat({socket, userName, roomID}) {
    const [currentMessage, setCurrentMessage] = useState('');
    const sendMessage = async () => {
        if(currentMessage !== ''){
            const messsagedata = {
                room: roomID,
                author: userName,
                message: currentMessage,
                time : new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            };
            await socket.emit('send_message', messsagedata);
        }

    }
    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
        });
    }, [socket]);

  return (
    <div >
    <div className='Chat__Header'>
        <p>Anime Chat</p>
    </div>
    <div ></div>
    <div >
        <input type='text' placeholder='Type a message...' 
           onChange={(e) =>  setCurrentMessage(e.target.value)}/>
        <button onClick={sendMessage}>
            &#10148;
        </button>
    </div>
    </div>
  )
}

export default Chat