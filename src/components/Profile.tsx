export default function Profile({user}:any){
    console.log(user)
    return(
        <div className="profile-container" style={{backgroundColor:'white'}}>
            <h1>Hello, {user.username}!</h1>
            <div className="user-data-container">
                <span>First Name: {user.first_name}</span><br/>
                <span>Last Name: {user.last_name}</span><br/>
                <span>Username: {user.username}</span><br/>
                <span>Email: {user.email}</span><br/>
            </div>
            <button>Edit your profile</button>
        </div>
    )
}