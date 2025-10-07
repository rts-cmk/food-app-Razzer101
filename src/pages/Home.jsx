import BurgerSection from "../components/BurgerSection";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./Home.css"

export default function Home(){
    return(
        <div className="home-background">
            <Header/>
            <BurgerSection/>
            <Nav/>
        </div>
    )
}