import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import arrowRight from '../assets/arrowRightBlue.svg';

import '../styles/marks.scss';

export function Marks() {
    return (
        <section className='marks'>
            <h2>Navegue por marcas</h2>

            <div>
                <Link to="/">
                    <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />
                </Link>

                <Link to="/">
                    <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />
                </Link>

                <Link to="/">
                    <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />
                </Link>

                <Link to="/">
                    <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />
                </Link>

                <Link to="/">
                    <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />
                </Link>
            </div>

            <div className='markArrow'>
                <img src={arrowRight} alt="Seta pra direita" />
            </div>
        </section>
    )
}