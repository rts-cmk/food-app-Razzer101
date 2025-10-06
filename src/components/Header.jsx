import { Link } from "react-router";

export default function Header(){
    return(
        <>
        <header>
            <h1>Foodgo</h1>
            <Link to="/profile">
                <img src="profilePicNotFound.png" alt="Profile picture" />
            </Link>
        </header>
        <h2>Order your favourite food!</h2>
        </>
    )
}