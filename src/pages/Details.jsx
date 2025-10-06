import { useParams } from "react-router";
import "./Details.css"

export default function Details(){
    let params = useParams();
    
    return(
        <h1>Id: {params.burgerId}</h1>
    )
}