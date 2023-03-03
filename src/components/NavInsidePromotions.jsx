import { NavLink } from 'react-router-dom';

import corrida from '../assets/categoriesIcons/corrida.svg';
import ferramentas from '../assets/categoriesIcons/ferramentas.svg';
import whiskey from '../assets/categoriesIcons/whiskey.svg';
import saude from '../assets/categoriesIcons/saude.svg';
import tecs from '../assets/categoriesIcons/monitorTabletSmartphone.svg';
import supermercado from '../assets/categoriesIcons/supermercados.svg';
import moda from '../assets/categoriesIcons/moda.svg';

import '../styles/navInsidePromotions.scss';

// Aqui há excesso de repetição, então eu faria somente um desses NavLinks e passaria as informações como parâmetro de um .map, se der tempo eu irei corrigir.

// Existe diferença de tamanho nesses componentes no figma, por ex a caixa de "Saúde" tem 164px enquanto a caixa de Esportes tem 143px, isso causou uma diferença que não era o desejado
// Por causa dessa diferença se eu mantiver o overflow igual ao projeto, o "Esportes e Fitness" vai ficar fora do esquadro, por ter o nome maior
// o jeito mais fácil de resolver seria diminuir a font-size de 16 pra 14, mas perderia a fidelidade pixel a pixel exigida no projeto

// todos os cards tem um tamanho de 128x128, e o gap entre eles deveria ser de 53px, igual o projeto do figma, o problema é que se você pegar exatamente o card, ao
// invés da caixa inteira, vai ter diferença no gap, portanto eu mantive o gap exato de 53px e desconsiderei o possível erro das caixas no figma, em uma situação
// da vida real, eu conversaria com o designer pra definirmos a solução.
export function NavInsidePromotions() {
    return (
        <nav className='navPromotionsContainer'>
            <NavLink to="?categoria=tecnologia">
                <div>
                    <img src={tecs} alt="ícone de bebida" />
                </div>
                Tecnologia
            </NavLink>

            <NavLink to="?categoria=supermercado">
                <div>
                    <img src={supermercado} alt="ícone de bebida" />
                </div>
                Supermercado
            </NavLink>

            <NavLink to="?categoria=bebidas">
                <div>
                    <img src={whiskey} alt="ícone de bebida" />
                </div>
                Bebidas
            </NavLink>

            <NavLink to="?categoria=ferramentas">
                <div>
                    <img src={ferramentas} alt="ícone de ferramentas" />
                </div>
                Ferramentas
            </NavLink>

            <NavLink to="?categoria=saude">
                <div>
                    <img src={saude} alt="ícone de carrinho de compras" />
                </div>
                Saúde
            </NavLink>

            <NavLink to="?categoria=esportes">
                <div>
                    <img src={corrida} alt="ícone de uma pessoa correndo" />
                </div>
                Esportes e Fitness
            </NavLink>

            <NavLink to="?categoria=moda">
                <div>
                    <img src={moda} alt="ícone de uma pessoa correndo" />
                </div>
                Moda
            </NavLink>

            {/* <NavLink to="?categoria=mercado">
                <div>
                    <img src={moda} alt="ícone de uma pessoa correndo" />
                </div>
                Mercados
            </NavLink>

            <NavLink to="?categoria=padaria">
                <div>
                    <img src={moda} alt="ícone de uma pessoa correndo" />
                </div>
                Padarias
            </NavLink>

            <NavLink to="?categoria=oriental">
                <div>
                    <img src={moda} alt="ícone de uma pessoa correndo" />
                </div>
                Oriental
            </NavLink> */}
        </nav>
    )
}