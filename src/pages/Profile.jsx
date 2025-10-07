import { Settings, ArrowLeft } from 'lucide-react';
import { Link } from "react-router";
import "./Profile.css"

export default function Profile(){
    return(
        <div className='Profile-background'>
            <section className="Profile-image">
                <div>
                    <Link to="/"><ArrowLeft /></Link>
                    <button><Settings /></button>
                </div>
                <img src="/profilePicNotFound.png" alt="Profile picture" />
            </section>
            <section className='Profile-section'>
                <div>
                    <p>Name</p>
                    <p>Web Dev</p>
                </div>
                <div>
                    <p>Email</p>
                    <p>WebDev@gmail.com</p>
                </div>
                <div>
                    <p>Delivery address</p>
                    <p>Pulsen 8, 4000 Roskilde</p>
                </div>
                <div>
                    <p>Password</p>
                    <p>&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</p>
                </div>
            </section>
            <section className='edit-section'></section>
        </div>
    )
}