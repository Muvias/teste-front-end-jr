import axios from 'axios';

import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import left from '../assets/left.svg';
import right from '../assets/right.svg';

import '../styles/carousel.scss';
import { Modal } from './Modal';

export function Carousel() {
    const carousel = useRef(null);
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const count = useRef(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    async function getIphonesDatas() {
        return await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json').then(res => res.data.products);
    }

    const { data, isLoading } = useQuery('iphonesDatas', getIphonesDatas, { staleTime: 10 * (60 * 1000), });

    // desativa o scroll quando a modal está aberta;
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'unset';
          }
     }, [isModalOpen]);
    
    function handleLeftClick(e) {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

        count.current = count.current - 1;

        if (count.current <= 0) {
            leftArrow.current.style.display = 'none';
        };

        if (count.current <= 5) {
            rightArrow.current.style.display = 'block';

        };
    };

    function handleRightClick(e) {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;

        count.current = count.current + 1;


        if (window.innerWidth < 500) {
            if (count.current >= 6) {
                rightArrow.current.style.display = 'none';
            };

            if (count.current >= 1) {
                leftArrow.current.style.display = 'block';

            };
        } else {
            if (count.current >= 3) {
                rightArrow.current.style.display = 'none';
            };

            if (count.current >= 1) {
                leftArrow.current.style.display = 'block';

            };
        }
    };

    function handleOpenModal(image, title, description, price) {
        setImage(image);
        setTitle(title);
        setDescription(description);
        setPrice(price);

        setIsModalOpen(true);
    };

    function handleCloseModal() {
        setIsModalOpen(false);
    };

    return (
        <>
            {isLoading ? <p>carregando...</p> :
                <div className="carouselContainer">
                    <div className="carousel" ref={carousel}>
                        {data.map((iphone, key) => (
                            <div key={key}>
                                <img src={iphone.photo} alt={`Foto do ${iphone.productName}`} />
                                <p className='description'>{iphone.descriptionShort}</p>
                                <span className='fullPrice'>R$ {iphone.price.toFixed(2).replace('.', ',')}</span>
                                <span className='priceWithDiscount'>R$ {(iphone.price - (iphone.price * 0.0648)).toFixed(2).replace('.', ',')}</span>
                                <p className='parcels'>ou 2x de {(iphone.price/2).toFixed(2).replace('.', ',')} sem juros</p>
                                <span className='shipping'>Frete grátis</span>
                                <button onClick={() => handleOpenModal(iphone.photo, iphone.productName, iphone.descriptionShort, iphone.price)}>COMPRAR</button>
                            </div>
                        ))}
                    </div>

                    <div className='arrows'>
                        <button ref={count} onClick={handleLeftClick} className="arrowLeft">
                            <img ref={leftArrow} src={left} alt="seta para esquerda" />
                        </button>
                        <button ref={count} onClick={handleRightClick} className="arrowRight">
                            <img ref={rightArrow} src={right} alt="seta para direita" />
                        </button>
                    </div>

                    {isModalOpen && (
                        <Modal image={image} title={title} description={description} price={price} closeModal={handleCloseModal} />
                    )}
                </div>
            }
        </>
    )
}