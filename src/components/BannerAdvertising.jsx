import { Link } from 'react-router-dom';

import bancada from '../assets/bancada.jpg';

import '../styles/bannerAdvertising.scss';

export function BannerAdvertising({ title, description, title2, description2, requiredWidth, requiredHeight }) {
    const divStyle = {
        width: requiredWidth,
        height: requiredHeight,
    };

    return (
        <div className='AdvertisingBannerContainer'>
            <div className="bannerContainer" style={divStyle}>
                <Link to="/" title="promoções">
                    <img src={bancada} alt={`banner ${title}`} style={divStyle}/>
                    <div className="cover"></div>
                </Link>

                <div className="textAdvContainer">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <Link to="/" title={`Conferir ${title}`}>Confira</Link>
                </div>
            </div>

            <div className="bannerContainer" style={divStyle}>
                <Link to="/" title="promoções">
                    <img src={bancada} alt={`banner ${title2}`} style={divStyle}/>
                    <div className="cover"></div>
                </Link>

                <div className="textAdvContainer">
                    <h3>{title2}</h3>
                    <p>{description2}</p>

                    <Link to="/" title={`Conferir ${title2}`}>Confira</Link>
                </div>
            </div>
        </div>
    )
}