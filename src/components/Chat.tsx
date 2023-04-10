export default function Chat({ msg }: any) {
  return (
    <>
      <div className={msg.user === "me" ? "mychat" : "otherchat"} key={msg.i}>
        <span className="chat-user">{msg.user}</span>
        <br />
        <span className="user-message">{msg.message}</span>
        <br />
        <span className="user-message-date">{msg.date}</span>
      </div>
    </>
  );
}
