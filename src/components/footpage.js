import s from '../styles/Foot.module.scss';

import { RiInstagramFill, RiFacebookBoxFill, RiLinkedinBoxFill, RiWhatsappFill, RiMailFill, RiWhatsappLine } from 'react-icons/ri';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function FootPage({ fuk, len, fun }) {
    return (
        <div className={s.footpage}>
            {
                len === 1 ?
                    <div className={s.menu}>
                        <button onClick={() => fuk(1)}><h1>Nosotros</h1></button>
                        <button onClick={() => fuk(2)}><h1>Unidades</h1></button>
                        <button onClick={() => fuk(3)}><h1>Contacto</h1></button>
                    </div> : ''
            }
            {
                len === 2 ?
                    <div className={s.menu}>
                        <button onClick={() => fuk(1)}><h1>About Us</h1></button>
                        <button onClick={() => fuk(2)}><h1>Transportation</h1></button>
                        <button onClick={() => fuk(3)}><h1>Contact</h1></button>
                    </div> : ''
            }
            {
                len === 3 ?
                    <div className={s.menu}>
                        <button onClick={() => fuk(1)}><h1>我社</h1></button>
                        <button onClick={() => fuk(2)}><h1>輸送サービス</h1></button>
                        <button onClick={() => fuk(3)}><h1>連絡先</h1></button>
                    </div> : ''
            }
            <div className={s.contact}>
                <div className={s.redes}>
                    <a href='https://www.instagram.com/firstlogisticandservice/' target='_blank'><h1><RiInstagramFill /></h1></a>
                    <a href='https://www.facebook.com/firstlogisticandservice/' target='_blank'><h1><RiFacebookBoxFill /></h1></a>
                    <a href='https://www.linkedin.com/in/first-logistic-and-service-192a81211/' target='_blank'><h1><RiLinkedinBoxFill /></h1></a>
                </div>
                <div className={s.inter}>
                    <h1><RiWhatsappFill /></h1>
                    <h1>449 428 9008</h1>
                </div>
                <div className={s.inter}>
                    <h1><RiMailFill /></h1>
                    <h1>ventas@servicioylogistica.com.mx</h1>
                </div>
                <div className={s.subMenu}>
                    <button><img className={s.flag} src={jp} alt={'japanese'} onClick={() => fun(3)} /></button>
                    <button><img className={s.flag} src={en} alt={'english'} onClick={() => fun(2)} /></button>
                    <button><img className={s.flag} src={es} alt={'spanish'} onClick={() => fun(1)} /></button>
                </div>
            </div>
        </div>
    );
}