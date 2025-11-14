import { Link } from "react-router";
import { House, User, MessageSquareText } from 'lucide-react';


export default function Nav(){
    return(
        <section className="nav-section">
            <div className="add-btn-background">
                <button>+</button>
            </div>
            <nav>
                <ul className="nav-left-side">
                    <li><Link to="/"><House /></Link></li>
                    <li><Link to="/profile"><User /></Link></li>
                </ul>
                <div className="nav-middle">
                    <div className="nav-middle-inner"></div>
                </div>
                <ul className="nav-right-side">
                    <li><MessageSquareText /></li>
                    <li>&#10084;</li>
                </ul>
                
            </nav>
        </section>
    )
}