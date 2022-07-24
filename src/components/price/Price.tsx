import React, {useEffect} from "react";
import {Menu} from "../menu/Menu";
import {Footer} from "../Footer/Footer";
import '../../styles/PageStyle.scss';

export function Price() {
    useEffect(() => {
        document.title = 'СИБМЕТСТАЛЬ - Прайслист'
    }, [])

    return (<>
        <Menu currentPage={"price"}/>
        <div className={"container-fluid"}>
            <div className="row">
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <h1>СТРАНИЦА ВРЕМЕННО НЕ АКТУАЛИЗИРОВАНА</h1>

                    <p className={"text-justify"}>Просим относиться с пониманием того, что в связи со сложившейся ситуацией в мире и мировой экономике, в данный момент мы не можем указать на сайте актуальные цены, по которым можно сдать металлолом в пункт приема ООО «СИБМЕТСТАЛЬ».</p>
                    <p className={"text-justify"}>Точная стоимость приема может быть определена только после обсуждения всех деталей в телефонном режиме или при личном осмотре металла</p>

                </div>
                <blockquote className="col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-10 offset-1 col-sm-10 offset-sm-1 border blockquote text-center shadow p-4 bg-white rounded">
                    <h4>
                        <em>Чем больше металла Вы готовы продать,
                            тем выше будет цена приема, предложенная нами.
                        </em>
                    </h4>
                </blockquote>
            </div>
        </div>
        <Footer/>
    </>)
}