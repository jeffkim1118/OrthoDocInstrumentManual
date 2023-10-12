import { useState, useEffect, useRef } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Chat from "./Chat";
import CreatePrivateMsg from "./CreatePrivateMsg";
import SendArrow from "./images/send.svg";
import moment from 'moment';
import chatIcon from "./images/chat.svg";

export default function PublicChat() {
  const token = localStorage.getItem("token");
  let decodedUser:any;
  if (token) {
    const base64String = token.split(".")[1];
    try {
      decodedUser = JSON.parse(atob(base64String));
    } catch (error) {
      console.error("Invalid base64 string or JSON format:", error);
      // Handle the error appropriately, e.g., set decodedUser to a default value or show an error message.
    }
  }
  let user: any = useSelector(selectUser);
  const bottomRef = useRef<HTMLInputElement>(null);

  const [newMessage, setNewMessage] = useState("");
  const [msgData, setMsgData] = useState<any[]>([]);
  const [displayChatForm, setDisplayChatForm] = useState(false);
  const [displayChatBtn, setDisplayChatBtn] = useState(true);
  const [showPrivateMsgForm, setPrivateMsgFormStatus] = useState(false);
  const [newMsgCounter, increaseCounter] = useState(0);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchMessageData = async () => {
      await fetch("https://orthodoc-backend-88937012f308.herokuapp.com/api/conversations/1")
        .then((res) => res.json())
        .then((data) => setMsgData(data.messages))
    };
    fetchMessageData();
  }, []);

  useEffect(() => {
    scrollToBottom();
  });

  const handleChatForm = () => {
    increaseCounter(0)
    setDisplayChatBtn((current) => !current);
    setDisplayChatForm((current) => !current);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newMessage !== "") {
      fetch(`https://orthodoc-backend-88937012f308.herokuapp.com/api/messages`, {
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
      let allMessages = [...msgData, data];
      setMsgData(allMessages);
      increaseCounter(newMsgCounter+1);
    }
  };

  const groupMsgByDate = () => {
    msgData.reduce((acc, el) => {
      const messageDay = moment(el.created_at).format('YYYY-MM-DD');
      console.log(el)
      console.log(messageDay)
      
    })
  }
  // groupMsgByDate()
 
  

  return (
    <>
      {displayChatBtn === true ? (
        <div className="open-button">
          {newMsgCounter === 0 ? null:<span className="new-msg-counter"/>}
          <img
            src={chatIcon}
            onClick={() => handleChatForm()}
          />
        </div>
      ) : null}

      <ActionCableConsumer
        channel={{ channel: "MessagesChannel" }}
        onReceived={ReceiveMessageData}
      />

      {displayChatForm === true ? (
        <div className="chat-popup" id="myForm">
          <form className="chat-form-container" onSubmit={handleSubmit}>
            <div className="cancel-btn-container">
              <a className="cancel-btn" onClick={() => handleChatForm()}>
                X
              </a>
            </div>

            <div className="text-messages-container">
              {msgData.map((msg: any) => (
                <Chat msg={msg} decodedUser={decodedUser} key={msg.id} />
              ))}
              <div className="bot-ref" ref={bottomRef}></div>
            </div>

            <div className="text-area">
              <textarea
                id="output"
                className="textMsg"
                placeholder="Type message.."
                name="msg"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="msg-send-btn">
                <img src={SendArrow}></img>
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
