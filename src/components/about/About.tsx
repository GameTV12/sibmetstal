import React, {useEffect} from "react";
import {Menu} from "../menu/Menu";
import {Footer} from "../Footer/Footer";
// @ts-ignore
import pdf from "../../images/license.pdf";
import '../../styles/PageStyle.scss';

export function About(){
    useEffect(() => {
        document.title = 'СИБМЕТСТАЛЬ - О компании'
    }, [])

    return (<>
        <Menu currentPage={"about"}/>
        <div className={"container-fluid"}>
            <div className="row">
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <h1>ЗАКУПКА ЛОМА ЦВЕТНЫХ И ЧЕРНЫХ МЕТАЛЛОВ</h1>

                    <p><em>ООО «СИБМЕТСТАЛЬ» <br/>
                    ИНН 4217188588 <br/>
                    ОГРН 1184205007304 от 11.04.2018г.</em></p>
                    <p className={"text-justify"}><a href={pdf} download={"Лицензия Сибметсталь"}>Лицензия на осуществление заготовки, хранения, переработки и реализации лома черных, цветных металлов № ОЛ-169-ЛМ 42 КО 000209 от 21.09.2018г.</a></p>

                    <ul className={"work-list"}>
                        <li>Работаем с 2018 года;</li>
                        <li>Покупаем любой объем лома;</li>
                        <li>Покупаем все виды цветного, черного металла, кабеля;</li>
                        <li>Предлагаем выгодные индивидуальные условия предприятиям и оптовикам;</li>
                        <li>Делаем выгодные предложения постоянным партнёрам.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}