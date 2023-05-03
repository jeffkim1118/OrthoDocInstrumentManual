import { useState, useEffect, useRef } from "react";
import { ActionCable } from 'react-actioncable-provider';
import Chat from "./Chat";


export default function PublicChat() {
  let ws = new WebSocket('ws://localhost:3000/cable');
  console.log(ws)
  const token = localStorage.getItem('token');
  let decoded:any = token?.split('.')[1];
  let decodedUser = JSON.parse(atob(decoded))

  const bottomRef = useRef<HTMLInputElement>(null);
  
  const [newMessage, setNewMessage] = useState('')

  const [msgData, setMsgData] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/conversations/1')
    .then(res => res.json())
    .then(data => setMsgData(data.messages))
  },[])
 
  
  const openForm = () => {
    let chatbox = document.getElementById("myForm");
    if (chatbox) {
      chatbox.style.display = "block";
    } 
  };

  const closeForm = () => {
    let chatbox = document.getElementById("myForm");
    if (chatbox) {
      chatbox.style.display = "none";
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(newMessage !== ''){
      fetch(`http://localhost:3000/api/messages`, {
        method: 'POST',
        headers: {
          'content-type' : 'application/json',
        },
        body: JSON.stringify({
          content: newMessage,
          user_id: decodedUser.id,
          conversation_id: 1
        })
      })
      .then(res => res.json())
      .then((newData) => {
        setMsgData((oldData) => [...oldData, newData])
        setNewMessage("")
      })
      .catch(error => {
        console.log(error)
      })
    }
    // const date = new Date();
    // const todaysDate = date.toLocaleDateString();
    // if(newMessage !== ''){
    //   // setNewMessage('')
    //   fetch(`http://localhost:3000/messages`, {
    //     method: 'POST',
    //     headers: {
    //       'content-type' : 'application/json',
    //     },
    //     body: JSON.stringify({
    //       content: newMessage,
    //       postedDateTime: todaysDate,
    //       conversation_id: params.id,
    //       user_id: user.id
    //     })
    //   })
    // }
  }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const date = new Date();
  //   const todaysDate = date.toLocaleDateString();
  //   const newMsg = { user: "me", message: newMessage, date: `${todaysDate}` };
   
  //   setMsgArray((oldArray) => [...oldArray, newMsg]);
  //   setNewMessage("");
  // };

  // This automatically scroll down the chat messages to the bottom to show the latest messages.
  useEffect(() => {
    if (bottomRef.current != null) {
      bottomRef.current.addEventListener('DOMNodeInserted', (event:any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  
  return (
    <>
      <button className="open-button" onClick={() => openForm()}>
        Chat
      </button>
      {/* <ActionCable
        channel={{ channel: 'MessagesChannel' }}
        onReceived={something}
      /> */}
      <div className="chat-popup" id="myForm">
        <form className="chat-form-container" onSubmit={(e) => handleSubmit(e)}>
          <h1>Open Chat</h1>
          <div className="text-messages-container" ref={bottomRef}>
            {msgData.map((msg:any) => (
              <Chat msg={msg} decodedUser={decodedUser} key={msg.id}/>
            ))}
          </div>
          <textarea
            id="output"
            className="textMsg"
            placeholder="Type message.."
            name="msg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn">
            Send
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => closeForm()}
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
}
