export default function PublicChat() {
  const exampleChat = [
    { user: "me", message: "Hello all!", date: "April 8 2023" },
    { user: "mike", message: "How are you?", date: "April 8 2023" },
    { user: "jane", message: "I'm fine, thanks!", date: "April 9 2023" },
  ];

  const openForm = () => {
    let chatbox = document.getElementById("myForm");
    if (chatbox) {
      chatbox.style.display = "block";
    } else {
    }
  };

  const closeForm = () => {
    let chatbox = document.getElementById("myForm");
    if (chatbox) {
      chatbox.style.display = "none";
    }
  };

  return (
    <>
      <button className="open-button" onClick={() => openForm()}>
        Chat
      </button>
      <div className="chat-popup" id="myForm">
        <form className="form-container">
          <h1>Open Chat</h1>
          <div className="text-messages-container">
            {exampleChat.map((chat, i) => (
              <div
                className={chat.user === "me" ? "mychat" : "otherchat"}
                key={i}
              >
                <span className="chat-user">{chat.user}</span>
                <br />
                <span className="user-message">{chat.message}</span>
                <br />
                <span className="user-message-date">{chat.date}</span>
              </div>
            ))}
          </div>
          <textarea placeholder="Type message.." name="msg" required></textarea>
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
