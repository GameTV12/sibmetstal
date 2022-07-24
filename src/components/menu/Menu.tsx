import React, {useEffect, useRef, useState} from "react";
import '../../styles/Menu.scss';
import Logo from "../../images/logo.png";
import {Link, useNavigate} from "react-router-dom";

type MenuLink = {
    currentPage: string
}

export const Menu = (props: MenuLink) => {
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth
    })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    const [menuActive, setMenuActive] = useState(false);
    let menuElement = useRef(null);
    useEffect(() => {
        // @ts-ignore
        menuActive || windowDimenion.winWidth > 767.98 ? menuElement.current.style.display = "flex" : menuElement.current.style.display = "none";
    }, [menuActive, windowDimenion]);

    let navigate = useNavigate();

    const menuItems = [
        {name: "Главная", link: "/"},
        {name: "О компании", link: "/about"},
        {name: "Прайс", link: "/price"},
        {name: "Контакты", link: "/contacts"}
    ]



    function openMenu(e: any){
        e.preventDefault();
        if (!menuActive) {
            setMenuActive(true);
            // @ts-ignore
            menuElement.current.style.display = "none";
        }
        else {
            setMenuActive(false);
            // @ts-ignore
            menuElement.current.style.display = "flex";
        }
        // @ts-ignore
        console.log(menuElement.current.style.display);
    }

    function closeMenuAfterClickLink(e: any, link: any){
        e.preventDefault();
        setMenuActive(false);
        navigate(link);
    }

    return (<>

        <div className={"navbar-menu"}>
            <div className={"navbar-top"}>
                <div className={"ul-list"}>
                    <li><a href="tel:+79069799859">+7-906-979-98-59</a></li>
                    <li><a href="mailto:sibsmet@mail.ru">sibsmet@mail.ru</a></li>
                </div>
                <div className={"menu-button"} onClick={(e) => openMenu(e)}>
                    <span/>
                </div>
            </div>
            <div className={"navbar-main"} ref={menuElement}>
                <div className="logo" onClick={() => navigate("/")}>
                </div>
                <div className="list">
                    <div className={"ul-list"}>
                        {menuItems.map((item) =>
                            <>{"/" + props.currentPage === item.link ? <li className={"current-page"}><Link to={item.link} onClick={(e) => (e.preventDefault())}>{item.name}</Link></li> : <li><Link to={item.link} onClick={(e) => closeMenuAfterClickLink(e, item.link)}>{item.name}</Link></li>}</>
                        )}
                    </div>
                </div>
            </div>
        </div>
            <div className={"navbar-pos"}></div>
        </>
    )
}