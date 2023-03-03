import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

import '../styles/modal.scss';

export function Modal({ image, title, description, price, closeModal }) {
    return (
        <div
            className='modalBackground'
        >
            <div className="modalContainer">
                <div className="boxImage">
                    <img src={image} alt={`foto do ${title}`} />
                </div>

                <div className="modalTextContainer">
                    <h1>{title}</h1>
                    <span>{`R$ ${price?.toFixed(2).replace('.', ',')}`}</span>
                    <p>{description}</p>
                    <Link to="/">Veja mais detalhes do produto &gt;</Link>
                </div>

                <div
                    className="iconClose"
                    onClick={() => closeModal()}
                >
                    <X size={18} aria-label="Fechar" />
                </div>
            </div>
        </div>
    )
}