export default function CreatePrivateMsg(){
    return(
        <div className="create-private-msg-form">
            <form>
                <input className="msg-target-username" type="text" placeholder="Type username"></input>
                <button className="private-msg-create-btn">Create</button>
            </form>
        </div>
    )
}