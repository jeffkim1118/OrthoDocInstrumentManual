export default function Profile({user}:any){
    console.log(user)
    return(
        <div style={{backgroundColor:'white'}}>
            <h1>Hello, {user.username}!</h1>
            <button>Edit your profile</button>
        </div>
    )
}