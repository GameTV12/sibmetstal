import React, {useEffect} from "react";
import {Menu} from "../menu/Menu";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/PageStyle.scss';
import {Footer} from "../Footer/Footer";

export function Contacts() {
    useEffect(() => {
        document.title = 'СИБМЕТСТАЛЬ - Контакты'
    }, [])

    return (<>
        <Menu currentPage={"contacts"}/>
        <div className={"container-fluid"}>
            <div className="row">
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <p><strong><a href="tel:+79069799859" className={"contact-link"}>+7-906-979-98-59</a></strong></p>
                    <p><strong><a href="mailto:sibsmet@mail.ru" className={"contact-link"}>SIBSMET@MAIL.RU</a></strong></p>
                </div>
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <h2>ПЛОЩАДКА ПО ПРИЕМКЕ ТОВАРА:</h2>
                    <p className={"text-justify"}>654101, Кемеровская область - Кузбасс, г. Новокузнецк (Центральный р-н), ул. Левашова, дом № 10А</p>
                    <p className={"text-justify"}><em>Обращаем ваше внимание, что пункт приема лома цветных и черных металлов имеет не полный режим работы. Поэтому узнавайте точный график работы площадки по нашему контактному телефону.</em></p>
                </div>
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12"}>
                    <h2>РЕКВИЗИТЫ КОМПАНИИ:</h2>
                    <table className={"table table-striped table-bordered"}>
                        <tbody>
                        <tr>
                            <th scope="row">Полное наименование организации</th>
                            <td>Общество с ограниченной ответственностью «Сибметсталь»</td></tr>
                        <tr>
                            <th scope="row">Юридический адрес</th>
                            <td>654101,  Кемеровская область - Кузбасс,
                                г. Новокузнецк ул. Левашова, дом 10а
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">ИНН/КПП</th>
                            <td>4217188588/421701001</td>
                        </tr>
                        <tr>
                            <th scope="row">ОГРН</th>
                            <td>1184205007304</td>
                        </tr>
                        <tr>
                            <th scope="row">Банковские реквизиты</th>
                            <td>Р/счет 40702810953100000964 <br/>
                                в ПАО АКБ "АВАНГАРД" г. МОСКВА <br/>
                                БИК 044525201 <br/>
                                К/счет 30101810000000000201
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-md-10 offset-md-1 col-12 col-sm-12 z-depth-1-half map-container"} id="map-container-google-1">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A235a6cfc07c31222963b0ed74ab5b6faadc591966cfc0e330caa2cb2369aa1c8&amp;source=constructor"
                        width="100%" height="360" frameBorder="0" />
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}