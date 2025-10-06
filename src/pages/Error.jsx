import { Link } from "react-router";

export default function Error(){
    return(
        <>
        <h1>This page doesn't exist</h1>
        <Link to="/">Go to main page?</Link>
        </>
    )
}