import { Link, useParams } from "react-router";
import burgerData from "./../assets/burgerData.json"
import { Search, ArrowLeft } from 'lucide-react';
import "./Details.css"
import { useState } from "react";

export default function Details(){
    let params = useParams();
    const detailsBurger = burgerData[params.burgerId - 1]
    const [portion, setPortion] = useState(0)
    
    return(
        <>
            <section className="details-image">
                <div>
                    <Link to="/"><ArrowLeft /></Link>
                    <button><Search /></button>
                </div>
                <img src={"/"+ detailsBurger.img} alt={detailsBurger.subtitle} />
            </section>
            <section className="details-section">
                <h1>{detailsBurger.title}{detailsBurger.subtitle}</h1>
                <p className="details-rating"><span>&#9733;</span> {detailsBurger.rating} - {detailsBurger.time} mins</p>
                <p className="details-description">{detailsBurger.description}</p>
                <ul className="extra-info">
                    <li className="spiciness">
                        <p className="extra-info-title">Spicy</p>
                        <input readOnly type="range" min={1} max={100} value={detailsBurger.spicy}/>
                        <div>
                            <p>Mild</p>
                            <p>Hot</p>
                        </div>
                    </li>
                    <li className="portions">
                        <p className="extra-info-title">Portion</p>
                        <div>
                            <button onClick={() => {portion === 0 ? 0 : setPortion(portion - 1)}}>-</button>
                            <p>{portion}</p>
                            <button onClick={() => setPortion(portion + 1)}>+</button>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="order-section">
                <p>${detailsBurger.price}</p>
                <button className="order-now-btn">ORDER NOW</button>
            </section>
        </>
    )
}