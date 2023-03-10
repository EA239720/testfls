import s from '../styles/Servicios.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Servicios({ len, fun }) {
    return (
        <div className={s.servicios}>
            <div className={s.subMenu}>
                <button className={s.ws}><RiWhatsappLine /></button>
                <button><img className={s.flag} src={jp} alt={'japanese'} onClick={() => fun(3)} /></button>
                <button><img className={s.flag} src={en} alt={'english'} onClick={() => fun(2)} /></button>
                <button><img className={s.flag} src={es} alt={'spanish'} onClick={() => fun(1)} /></button>
            </div>
            {
                len === 1 ?
                    <>
                        <div className={s.card}>
                            <div className={s.info}>
                                <h1>Transporte Personal</h1>
                                <h3>Transportamos al capital mas importante para tu empresa, a tu personal.</h3>
                            </div>
                            <div className={s.info}>
                                <h1>Transporte Ejecutivo</h1>
                                <h3>Nuestro servicio siempre esta presente en tus proyectos.</h3>
                            </div>
                            <div className={s.info}>
                                <h1>Transporte Turistico</h1>
                                <h3>Transporte turistico para nuestros clientes, a cualquier parte de la ciudad.</h3>
                            </div>
                        </div>
                    </> : ''
            }
            {
                len === 2 ?
                    <>
                        <div className={s.card}>
                            <div className={s.info}>
                                <h1>Employee transportation</h1>
                                <h3>We transport our clients employees, the most important resource.</h3>
                            </div>
                            <div className={s.info}>
                                <h1>Executive transportation</h1>
                                <h3>Our service is always a part of your proyect.</h3>
                            </div>
                            <div className={s.info}>
                                <h1>Tourism transportation</h1>
                                <h3>Tourism service for our clients, to any part of the city.</h3>
                            </div>
                        </div>
                    </> : ''
            }
            {
                len === 3 ?
                    <>
                        <div className={s.card}>
                            <div className={s.info}>
                                <h1>???????????????</h1>
                                <h3>???????????????????????????????????????????????????????????????????????????????????????</h3>
                            </div>
                            <div className={s.info}>
                                <h1>???????????????????????????</h1>
                                <h3>???????????????????????????????????????????????????????????????????????????????????????</h3>
                            </div>
                            <div className={s.info}>
                                <h1>????????????</h1>
                                <h3>????????????????????????????????????????????????????????????????????????</h3>
                            </div>
                        </div>
                    </> : ''
            }
        </div>
    );
}