import '../styles/footer.scss';

import { Link } from 'react-router-dom';

import formasDePagamento from '../assets/footer/formasDePagamento.svg';
import logoEconverse from '../assets/footer/logoEconverseWhite.svg';
import logoVtex from '../assets/footer/logoVtexWhite.svg';
import facebookIcon from '../assets/footer/facebookIcon.svg';
import youtubeIcon from '../assets/footer/youtubeIcon.svg';
import instagramIcon from '../assets/footer/instagramIcon.svg';

export function Footer() {
    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <footer>
            <div className='topOfFooter'>
                <div className='footerInformationsContainer'>
                    <div className='informations'>
                        <h2>Sobre nós</h2>
                        <Link to="/">CONHEÇA</Link>
                        <Link to="/">COMO COMPRAR</Link>
                        <Link to="/">INDICAÇÃO E DESCONTO</Link>

                        <div className='socialMedia'>
                            <Link to="https://facebook.com/" target="__blank"><img src={facebookIcon} alt="Formas de pagamento" /></Link>
                            <Link to="https://instagram.com/" target="__blank"><img src={instagramIcon} alt="Formas de pagamento" /></Link>
                            <Link to="https://youtube.com/" target="__blank"><img src={youtubeIcon} alt="Formas de pagamento" /></Link>
                        </div>
                    </div>

                    <div className='informations'>
                        <h2>INFORMAÇÕES ÚTEIS</h2>
                        <Link to="/">FALE CONOSCO</Link>
                        <Link to="/">DÚVIDAS</Link>
                        <Link to="/">PRAZOS DE ENTREGA</Link>
                        <Link to="/">FORMAS DE PAGAMENTO</Link>
                        <Link to="/">POLÍTICA DE PRIVACIDADE</Link>
                        <Link to="/">TROCAS E DEVOLUÇÕES</Link>
                    </div>

                    <div className='informations'>
                        <h2>FORMAS DE PAGAMENTO</h2>
                        <img src={formasDePagamento} alt="Formas de pagamento" />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <h2>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h2>

                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

                    <div>
                        <input
                            type="email"
                            placeholder='SEU E-MAIL'
                        />

                        <button>OK</button>
                    </div>
                </form>
            </div>

            <div className='divider'></div>

            <div className='bottomOfFooter'>
                <p className='copyright'>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>

                <div className='logos'>
                    <img src={logoEconverse} alt="logo Econverse" />
                    <img src={logoVtex} alt="logo Vtex" />
                </div>
            </div>
        </footer>
    )
}