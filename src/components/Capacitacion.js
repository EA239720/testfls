import s from '../styles/Capacitacion.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';
import image1 from '../resources/newResources/Home1.JPG';
import image2 from '../resources/newResources/cap1.jpeg';
import image3 from '../resources/newResources/cap2.jpeg';

export default function Capacitacion({ len, fun, funk, men }) {
    return (
        <div className={s.capacitacion}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            <div className={s.card}>
                <img src={image1} alt={'image'} />
                <div className={s.desc}>
                    <h2>Somos conscientes de que la calidad de nuestro servicio
                        de transporte recae en nuestros colaboradores, así,
                        buscamos operadores con un alto sentido de la disciplina
                        y el cumplimiento, personas que estén alineadas a los
                        valores empresariales que nos caracterizan.</h2>
                </div>
            </div>
            <div className={s.card}>
                <div className={s.desc}>
                    <h2>Uno de nuestros compromisos con nuestros clientes,
                        es actualizarnos en todos los aspectos del servicio
                        de transporte que prestamos diariamente al usuario
                        de los distintos servicios, por eso nuestros colaboradores
                        están preparados y capacitados para brindar la mejor
                        atención y seguridad</h2>
                </div>
            </div>
            <div className={s.card}>
                <div className={s.desc}>
                    <h1>Atención al cliente y enfoque a la calidad del servicio</h1>
                    <h2>Nuestros colaboradores están preparados para
                        brindar una atención adecuada a los usuarios
                        de nuestros servicios</h2>
                </div>
                <img className={s.img} src={image3} alt={'image'} />
            </div>
            <div className={s.card}>
                <img className={s.img} src={image2} alt={'image'} />
                <div className={s.desc}>
                    <h1>Prevención y combate contra incendios</h1>
                    <h2>Los imprevistos pueden suceder en cualquier
                        momento, por ello nuestros colaboradores están
                        preparados para lidiar y enfrentar diferentes
                        circunstancias adversas.</h2>
                </div>
            </div>
            <div className={s.card}>
                <div className={s.desc}>
                    <h1>Primeros auxilios RCP</h1>
                    <h2>Estamos preparados para lidiar con cualquier
                        inconveniente que se presente en el camino,
                        asegurando la salud y seguridad de los usuarios.</h2>
                </div>
            </div>
            {/*
                len === 1 ?
                    <>
                        <div className={s.desc}>
                            <h1>Capacitaciones a Colaboradores</h1>
                            <h2>El compromiso con nuestros clientes, es actualizarnos en todos los aspectos del servicio de transporte de personal ejecutivo que prestamos diariamente al usuario del servicio, por eso nuestros colaboradores estan preparados y capacitados para tu atencion y seguridad.</h2>
                            <div className={s.list}>
                                <h2>Atencion al cliente y Enfoque a la Calidad del Servicio.</h2>
                                <h2>Prevencion y Combate Contra Incendios.</h2>
                                <h2>Primeros Auxilios RCP.</h2>
                            </div>
                        </div>
                    </> : ''
            }
            {
                len === 2 ?
                    <>
                        <div className={s.desc}>
                            <h1>Coaching for Coworker</h1>
                            <h2>Our commitment is to be updated ourselves in every aspect of transportation services. For that reason, our personnel are prepared to give attention and safety.</h2>
                            <div className={s.list}>
                                <h2>Quality service focused on the customer.</h2>
                                <h2>Fire Prevention and Fire Fighting</h2>
                                <h2>First Aid RCP</h2>
                            </div>
                        </div>
                    </> : ''
            }
            {
                len === 3 ?
                    <>
                        <div className={s.desc}>
                            <h1>同僚のためのトレーニング</h1>
                            <h2>私たちのコミットメントは、輸送サービスのあらゆる側面で自分自身を更新することです。そのため、当社の担当者は注意と安全を確保する用意があります。</h2>
                            <div className={s.list}>
                                <h2>カスタマーサービスとサービス品質に焦点を当てます。</h2>
                                <h2>防火と消火。</h2>
                                <h2>応急処置 CPR。</h2>
                            </div>
                        </div>
                    </> : ''
            */}
        </div>
    );
}