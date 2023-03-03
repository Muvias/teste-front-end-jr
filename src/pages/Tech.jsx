import { NavLink } from "react-router-dom";
import { BannerPromotion } from "../components/BannerPromotion";
import { Carousel } from "../components/Carousel";
import { NavInsidePromotions } from "../components/NavInsidePromotions";
import { BannerAdvertising } from "../components/BannerAdvertising";

import '../styles/tech.scss';
import { Marks } from "../components/Marks";

export function Tech() {
    return (
        <section className="techContainer">
            <BannerPromotion />
            <NavInsidePromotions />

            <div className="techContent">
                <h2>Produtos Relacionados</h2>

                <nav>
                    <NavLink to="/?categoria=tecnologia&secao=celular">CELULAR</NavLink>
                    <NavLink to="/?categoria=tecnologia&secao=acessorios">ACESSÓRIOS</NavLink>
                    <NavLink to="/?categoria=tecnologia&secao=tablets">TABLETS</NavLink>
                    <NavLink to="/?categoria=tecnologia&secao=notebooks">NOTEBOOKS</NavLink>
                    <NavLink to="/?categoria=tecnologia&secao=tvs">TVS</NavLink>
                    <NavLink to="/?categoria=tecnologia&secao=todos">VER TODOS</NavLink>
                </nav>
            </div>

            <Carousel />

            <BannerAdvertising
                title="Parceiros"
                description="Lorem ipsum dolor sit amet, consectetur"
                title2="Parceiros"
                description2="Lorem ipsum dolor sit amet, consectetur"
            />

            <div className="techContent">
                <h2>Produtos Relacionados</h2>
                <NavLink to="/">Ver Todos</NavLink>
            </div>

            <Carousel />

            <BannerAdvertising
                title="Produtos"
                description="Lorem ipsum dolor sit amet, consectetur"
                title2="Produtos"
                description2="Lorem ipsum dolor sit amet, consectetur"
                requiredWidth="589px"
                requiredHeight="284px"
            />

            <Marks />

            <div className="techContent">
                <h2>Produtos Relacionados</h2>
                <NavLink to="/">Ver Todos</NavLink>
            </div>

            <Carousel />

        </section>
    )
}