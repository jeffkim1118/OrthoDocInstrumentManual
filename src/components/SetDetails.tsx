import { useParams } from "react-router-dom"

export default function SetDetails(){
    const {id} = useParams();
    return (
        <div>
            <h1>Setup {id}</h1>

        </div>
    )
}