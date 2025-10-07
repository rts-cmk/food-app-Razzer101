import { Settings, ArrowLeft } from 'lucide-react';
import { Link } from "react-router";
import "./Profile.css"

export default function Profile(){
    return(
        <div className='profile-background'>
            <section className="profile-image">
                <div>
                    <Link to="/"><ArrowLeft /></Link>
                    <button><Settings /></button>
                </div>
                <figure>
                    <img src="/profilePicNotFound.png" alt="Profile picture" />
                </figure>
            </section>
            <section className='profile-section'>
                <article>
                    <div>
                        <p className='profile-label'>Name</p>
                    </div>
                    <p className='profile-title'>Web Dev</p>
                </article>
                <article>
                    <div>
                        <p className='profile-label'>Email</p>
                    </div>
                    <p className='profile-title'>WebDev@gmail.com</p>
                </article>
                <article>
                    <div>
                        <p className='profile-label'>Delivery address</p>
                    </div>
                    <p className='profile-title'>Pulsen 8, 4000 Roskilde</p>
                </article>
                <article>
                    <div>
                        <p className='profile-label'>Password</p>
                    </div>
                    <p className='profile-title'>&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</p>
                </article>
            </section>
            <section className='edit-section'>
                <button>Edit Profile</button>
                <button>Log out</button>
            </section>
        </div>
    )
}