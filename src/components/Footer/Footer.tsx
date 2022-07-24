import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Footer.scss';

export function Footer() {
    return (<>
            <div className={"bottom-pos"}></div>
            <footer className={"bottom-0 text-center rights_text"}>
                &copy; ООО "СИБМЕТСТАЛЬ" 2022 Все права защищены
            </footer>
        </>
    );
}
