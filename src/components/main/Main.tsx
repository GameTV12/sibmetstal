import React, {useEffect} from "react";
import {Menu} from "../menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/PageStyle.scss';
import {Footer} from "../Footer/Footer";

export function Main() {
    useEffect(() => {
        document.title = 'СИБМЕТСТАЛЬ - Прием металлолома в Новокузнецке'
    }, [])

    return (<>
        <Menu currentPage={""}/>
        <div className={"container-fluid"}>
            <div className="row">
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <h1>ПРИЕМ МЕТАЛЛОЛОМА В НОВОКУЗНЕЦКЕ</h1>
                    <p className={"text-justify"}>ООО «СИБМЕТСТАЛЬ» занимается приемом металлолома в городе Новокузнецке от юридических лиц и государственных предприятий. У нас можно сдать на утилизацию и переработку цветной и черный металл, лом кабеля, отработанные аккумуляторы, электронный лом, оргтехнику и другие виды металла.</p>
                    <p className={"text-justify"}>Воспользоваться нашим услугами будет выгодно для Вас, так как наша компания держит высокие закупочные цены по городу Новокузнецк.</p>
                    <p className={"text-justify"}>ООО «СИБМЕТСТАЛЬ» при расчете цены индивидуально подходит к каждому клиенту, поэтому звоните нам для получения специальных условий.</p>
                    <div className="main-logo">
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}