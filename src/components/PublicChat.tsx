import { useState, useEffect, useRef, useContext } from "react";
import { ActionCable } from "react-actioncable-provider";
import { useSelector,useDispatch } from 'react-redux';
import Chat from "./Chat";
import { getUser } from "../features/userSlice";
import get from "../features/userSlice"
import { ReactReduxContext } from 'react-redux'
import { RootState } from "../app/Store"

export default function PublicChat() {
  const token = localStorage.getItem("token");
  let decoded: any = token?.split(".")[1];
  let decodedUser = JSON.parse(atob(decoded));

  const { store } = useContext(ReactReduxContext)
  const currentUserData = store.getState().user;

  const bottomRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  
  const [newMessage, setNewMessage] = useState("");
  const [msgData, setMsgData] = useState<any[]>([]);

  const [test, setTest] = useState()

  const makeChatButtonBlink = () => {
    let chatButton = document.getElementsByClassName(
      "open-button"
    )[0] as HTMLElement;
    chatButton.style.animation = "blinking 1s infinite";
  };

  const stopChatButtonBlink = () => {
    let chatButton = document.getElementsByClassName(
      "open-button"
    )[0] as HTMLElement;
    chatButton.style.animation = "none";
  };

  // useEffect(() => {
  //   makeChatButtonBlink();
  //   return () => {
  //     stopChatButtonBlink();
  //   };
  // }, [msgData]);
  
  // const currentUserData = useSelector((state: RootState) => state.user);
  useEffect(() => {
    dispatch(getUser()); // Dispatch an action to fetch the user data if required
  }, [dispatch]);
  console.log(currentUserData.user)

  useEffect(() => {
    const fetchMessageData = async () => {
      await fetch("http://localhost:3000/api/conversations/1")
      .then((res) => res.json())
      .then((data) => setMsgData(data.messages))
      .then(() => {
        if (bottomRef.current) {
          bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
        }
      });
    }
    fetchMessageData()
    // fetch("http://localhost:3000/api/conversations/1")
    //   .then((res) => res.json())
    //   .then((data) => setMsgData(data.messages))
    //   .then(() => {
    //     if (bottomRef.current) {
    //       bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
    //     }
    //   });
  }, []);

  const openForm = () => {
    // stopChatButtonBlink();
    let chatbox = document.getElementById("myForm");
    if (chatbox) {
      chatbox.style.display = "block";
      if (bottomRef.current) {
        bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
      }
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
    if (newMessage !== "") {
      fetch(`http://localhost:3000/api/messages`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: decodedUser.name,
          content: newMessage,
          user_id: decodedUser.id,
          conversation_id: 1,
        }),
      })
        .then((res) => res.json())
        .then((newData) => {
          console.log(newData);
          setNewMessage("");
          if (decodedUser.id === newData.message.user_id) {
            setMsgData([...msgData, newData.message]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // This automatically scroll down the chat messages to the bottom to show the latest messages.
  useEffect(() => {
    if (bottomRef.current != null) {
      bottomRef.current.addEventListener("DOMNodeInserted", (event: any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  const ReceiveMessageData = (data: any) => {
    if (data.user_id !== decodedUser.id) {
      const allMessages = [...msgData, data];
      setMsgData(allMessages);
      makeChatButtonBlink();
    }
  };

  return (
    <>
      <button className="open-button" onClick={() => openForm()}>
        Chat
      </button>
      <ActionCable
        channel={{ channel: "MessagesChannel" }}
        onReceived={ReceiveMessageData}
      />
      <div className="chat-popup" id="myForm">
        <form className="chat-form-container" onSubmit={handleSubmit}>
          <h1>Open Chat</h1>
          <div className="text-messages-container" ref={bottomRef}>
            {msgData.map((msg: any) => (
              <Chat msg={msg} decodedUser={decodedUser} key={msg.id} />
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
