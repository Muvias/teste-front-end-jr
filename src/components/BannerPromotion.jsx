import { Link } from "react-router-dom"

import banner from "../assets/banner.jpg"

import '../styles/banner.scss';

export function BannerPromotion() {
    return (
        <div className="bannerContainer">
            <Link to="/" title="promoções">
                <img src={banner} alt="banner de promoção" />
                <div className="cover"></div>
            </Link>

            <div className="textContainer">
                <h1>Venha conhecer nossas promoções</h1>
                <p>50% Off nos produtos</p>
                
                <Link to="/" title="promoções">Ver produto</Link>
            </div>
        </div>
    )
}