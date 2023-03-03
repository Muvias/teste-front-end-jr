import '../styles/header.scss';

import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';
import shieldCheck from '../assets/icons/shieldCheck.svg';
import truck from '../assets/icons/truck.svg';
import creditCard from '../assets/icons/creditCard.svg';
import search from '../assets/icons/search.svg';
import box from '../assets/icons/box.svg';
import heart from '../assets/icons/heart.svg';
import userCircle from '../assets/icons/userCircle.svg';
import shoppingCart from '../assets/icons/shoppingCart.svg';
import crown from '../assets/icons/crown.svg';

export function Header() {
    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <header>
            <div className='purchaseInfos'>
                <div>
                    <img src={shieldCheck} alt="ícone de um escudo com o símbolo checked dentro" />
                    <p>Compra <span>100% segura</span></p>
                </div>

                <div>
                    <img src={truck} alt="ícone de um caminhão de entregas" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>

                <div>
                    <img src={creditCard} alt="ícone de um cartão de crédito" />
                    <p><span>Parcele</span> suas compras</p>
                </div>
            </div>

            <div className='menu'>
                <img src={logo} alt="Imagem do logo da Vtex com o nome da marca ao lado" />

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='O que você está buscando?'
                    />
                    <img src={search} alt="ícone de uma lupa" />
                </form>

                <div>
                    <Link to="/" aria-label="Minhas Compras" title="Minhas Compras"><img src={box} alt="ícone de uma caixa" /></Link>
                    <Link to="/" aria-label="Favoritos" title="Favoritos"><img src={heart} alt="ícone de coração" /></Link>
                    <Link to="/" aria-label="Perfil" title="Perfil"><img src={userCircle} alt="ícone de usuário" /></Link>
                    <Link to="/" aria-label="Carrinho" title="Carrinho"><img src={shoppingCart} alt="ícone de carrinho de compras" /></Link>
                </div>
            </div>

            <div className='categories'>
                <NavLink to="/categorias">TODAS CATEGORIAS</NavLink>
                <NavLink to="/supermercado">SUPERMERCADO</NavLink>
                <NavLink to="/livros">LIVROS</NavLink>
                <NavLink to="/moda">MODA</NavLink>
                <NavLink to="/lançamentos">LANÇAMENTOS</NavLink>
                <NavLink to="/">OFERTAS DO DIA</NavLink>
                <NavLink to="/assinatura">
                    <img src={crown} alt="ícone de carrinho de compras" />
                    ASSINATURA
                </NavLink>
            </div>
        </header>
    )
}