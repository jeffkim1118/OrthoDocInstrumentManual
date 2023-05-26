import { useState, useEffect, useRef } from "react";
import { ActionCable} from 'react-actioncable-provider';
import Chat from "./Chat";

export default function PublicChat() {
  const token = localStorage.getItem('token');
  let decoded:any = token?.split('.')[1];
  let decodedUser = JSON.parse(atob(decoded))

  const bottomRef = useRef<HTMLInputElement>(null);

  const [newMessage, setNewMessage] = useState('');
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
          username: decodedUser.name,
          content: newMessage,
          user_id: decodedUser.id,
          conversation_id: 1
        })
      })
      .then(res => res.json())
      .then((newData) => {
        console.log(newData);
        setNewMessage("")
        if (decodedUser.id === newData.message.user_id) {
          setMsgData([...msgData, newData.message])
        }
        
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  // This automatically scroll down the chat messages to the bottom to show the latest messages.
  useEffect(() => {
    if (bottomRef.current != null) {
      bottomRef.current.addEventListener('DOMNodeInserted', (event:any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const something = (data:any) => {
    if (data.user_id !== decodedUser.id) {
      const allMessages = [...msgData, data];
      setMsgData(allMessages);
    }
  }


  return (
    <>
      <button className="open-button" onClick={() => openForm()}>
        Chat
      </button>
      <ActionCable
        channel={{ channel: 'MessagesChannel' }}
        onReceived={something}
      />
      <div className="chat-popup" id="myForm">
        <form className="chat-form-container" onSubmit={handleSubmit}>
          <h1>Open Chat</h1>
          <div className="text-messages-container" ref={bottomRef}>
            {msgData.map((msg:any) => (
              <Chat msg={msg} decodedUser={decodedUser} key={msg.id}/>
            ))}
            {/* {messages.map((message) => (
              <Chat message={message} decodedUser={decodedUser} key={message.id}/>
          // <li key={message.id}>{message.content}</li>
        ))} */}
          </div>
          <textarea
            id="output"
            className="textMsg"
            placeholder="Type message.."
            name="msg"
            value={newMessage}
            onChange={(e)=> setNewMessage(e.target.value)}
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



// import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
// import ActionCable from 'actioncable';
// import Chat from './Chat';

// interface Message {
//   id: number;
//   content: string;
//   user_id: number; // Assuming user_id is present in the message object
//   created_at: string; // Assuming created_at is present in the message object
// }

// const PublicChat: React.FC = () => {
//   const ws = useRef<WebSocket | null>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const token = localStorage.getItem('token');
//   let decoded:any = token?.split('.')[1];
//   let decodedUser = JSON.parse(atob(decoded))

//   const date = new Date();
//   const todaysDate = date.toLocaleDateString();

//   useEffect(() => {
//     ws.current = new WebSocket('ws://localhost:3000/cable');

//     return () => {
//       if (ws.current) {
//         ws.current.close();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const cable = ActionCable.createConsumer('ws://localhost:3000/cable');
//     const channel = cable.subscriptions.create('MessagesChannel', {
//       received: (data:any) => {
//         const message = JSON.parse(data);
//         setMessages((prevMessages) => [...prevMessages, message])
//       }
//     })
//     return () => {
//       channel.unsubscribe();
//     }
//   }, []);

//   const openForm = () => {
//     const chatbox = document.getElementById('myForm');
//     if (chatbox) {
//       chatbox.style.display = 'block';
//     }
//   };

//   const closeForm = () => {
//     const chatbox = document.getElementById('myForm');
//     if (chatbox) {
//       chatbox.style.display = 'none';
//     }
//   };

//   const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setNewMessage(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (ws.current && newMessage.trim() !== '') {
//       const message: Message = { id: Date.now(), content: newMessage, user_id:decodedUser.id, created_at:todaysDate }; // Create a temporary message object
//       setMessages((prevMessages) => [...prevMessages, message]);
//       ws.current.send(JSON.stringify(message));
//       setNewMessage('');
//     }
//   };

//   // useEffect(() => {
//   //   if (bottomRef.current) {
//   //     bottomRef.current.addEventListener('DOMNodeInserted', (event) => {
//   //       const { currentTarget: target } = event;
//   //       target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
//   //     });
//   //   }
//   // }, []);

//   return (
//     <>
//       <button className="open-button" onClick={openForm}>
//         Chat
//       </button>
//       <div className="chat-popup" id="myForm">
//         <form className="chat-form-container" onSubmit={handleSubmit}>
//           <h1>Open Chat</h1>
//           <div className="text-messages-container" ref={bottomRef}>
//             {messages.map((message) => (
//               <Chat
//               message={{
//                 id: message.id,
//                 content: message.content,
//                 user_id: message.user_id,
//                 created_at: message.created_at
//               }}
//               key={message.id}
//               decodedUser={decodedUser}
//             />
//             ))}
//           </div>
//           <textarea
//             id="output"
//             className="textMsg"
//             placeholder="Type message.."
//             name="msg"
//             value={newMessage}
//             onChange={handleMessageChange}
//             required
//           ></textarea>
//           <button type="submit" className="btn">
//             Send
//           </button>
//           <button type="button" className="btn cancel" onClick={closeForm}>
//             Close
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default PublicChat;

