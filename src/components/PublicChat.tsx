import { useState, useEffect, useRef, useContext } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import Chat from "./Chat";
import CreatePrivateMsg from "./CreatePrivateMsg";
import SendArrow from "./images/send.svg";

export default function PublicChat() {
  const token = localStorage.getItem("token");
  let decoded: any = token?.split(".")[1];
  let decodedUser = JSON.parse(atob(decoded));
  let user: any = useSelector(selectUser);
  const bottomRef = useRef<HTMLInputElement>(null);

  const [newMessage, setNewMessage] = useState("");
  const [msgData, setMsgData] = useState<any[]>([]);
  const [displayChatForm, setDisplayChatForm] = useState(false)
  const [showPrivateMsgForm, setPrivateMsgFormStatus] = useState(false);

  useEffect(() => {
    const fetchMessageData = async () => {
      await fetch(
        "https://orthodoc-backend-88937012f308.herokuapp.com/api/conversations/1"
      )
        .then((res) => res.json())
        .then((data) => setMsgData(data.messages))
        .then(() => {
          if (bottomRef.current) {
            bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
          }
        });
    };
    fetchMessageData();
  }, []);

  // const openForm = () => {
  //   // stopChatButtonBlink();
  //   let chatbox = document.getElementById("myForm");
  //   if (chatbox) {
  //     chatbox.style.display = "block";
  //     if (bottomRef.current) {
  //       bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
  //     }
  //   }
  // };

  // const closeForm = () => {
  //   let chatbox = document.getElementById("myForm");
  //   if (chatbox) {
  //     chatbox.style.display = "none";
  //   }
  // };

  const handleChatForm = () => {
    setDisplayChatForm((current) => !current);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newMessage !== "") {
      fetch(
        `https://orthodoc-backend-88937012f308.herokuapp.com/api/messages`,
        {
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
        }
      )
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
      let allMessages = [...msgData, data];
      setMsgData(allMessages);
      // makeChatButtonBlink();
    }
  };

  const createNewPrivateMsg = () => {
    setPrivateMsgFormStatus((current) => !current);
  };

  return (
    <>
      <button className="open-button" onClick={() => handleChatForm()}>
        Chat
      </button>

      <ActionCableConsumer
        channel={{ channel: "MessagesChannel" }}
        onReceived={ReceiveMessageData}
      />
     
      <div className="chat-popup" id="myForm">
        <form className="chat-form-container" onSubmit={handleSubmit}>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => handleChatForm()}
          >
            X
          </button>

          <div className="text-messages-container" ref={bottomRef}>
            {msgData.map((msg: any) => (
              <Chat msg={msg} decodedUser={decodedUser} key={msg.id} />
            ))}
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
            <button type="submit" className="btn">
              <img src={SendArrow}></img>
            </button>
          </div>
          {/* <button
            type="button"
            className="btn-cancel"
            onClick={() => closeForm()}
          >
            X
          </button> */}
        </form>
      </div>
    
    </>
  );
}
