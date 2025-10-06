import { Search, List, Heart } from 'lucide-react';
import burgerData from "./../assets/burgerData.json"
import { Link } from 'react-router';

export default function BurgerSection(){
    return(
        <>
            <section className='search-section'>
                <form>
                    <button className='search-btn'><Search /></button>
                    <input type="text" placeholder="Search"/>
                </form>
                <button className='filter-btn'><List /></button>
            </section>
            <section className="burger-section">
                {burgerData.map((burger, index) => {
                    return(
                        <Link to={"details/" + (index + 1)} key={burger.title + burger.id}>
                            <figure>
                                <img src={burger.img} alt={burger.title + burger.id} />
                            </figure>
                            <h3>{burger.title}</h3>
                            <p>{burger.subtitle}</p>
                            <div className='rating'>
                                <p><span>&#9733;</span>{burger.rating}</p>
                                <button className='favorite-btn'><Heart /></button>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}