import { useState, useEffect, useRef } from "react";
import Chat from "./Chat";

export default function PublicChat() {
  const bottomRef = useRef<HTMLInputElement>(null);
  let chatMessages = [
    { user: "me", message: "Hello all!", date: "April 8 2023" },
    { user: "mike", message: "How are you?", date: "April 8 2023" },
    { user: "jane", message: "I'm fine, thanks!", date: "April 9 2023" },
  ]
  const [newMessage, setNewMessage] = useState("");
  const [msgArray, setMsgArray] = useState(chatMessages);

  const [messages, setMessages] = useState([]);
  
 useEffect(() => {
  const date = new Date();
  const todaysDate = date.toLocaleDateString();
  const newMsg = { user: "me", message: newMessage, date: `${todaysDate}`};
  
 }, [])


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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const date = new Date();
    const todaysDate = date.toLocaleDateString();
    const newMsg = { user: "me", message: newMessage, date: `${todaysDate}` };
   
    setMsgArray((oldArray) => [...oldArray, newMsg]);
    setNewMessage("");
  };

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
      <div className="chat-popup" id="myForm">
        <form className="chat-form-container" onSubmit={(e) => handleSubmit(e)}>
          <h1>Open Chat</h1>
          <div className="text-messages-container" ref={bottomRef}>
            {msgArray.map((msg) => (
              <Chat msg={msg}/>
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
