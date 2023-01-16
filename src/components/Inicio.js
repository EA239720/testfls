import { useEffect, useState } from 'react';

import s from '../styles/Inicio.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';

import Home1 from '../resources/newResources/Home1.JPG'
import Home2 from '../resources/newResources/Home2.JPG'
import Units1 from '../resources/newResources/Units1.JPG'
import Logo from '../resources/logoflsGrandeBlanco.png';
import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Inicio({ len, fun, funk, men }) {
    const [ani, setAni] = useState(0);
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAni(1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={s.inicio}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            <div className={s.image}>
                <div
                    className={s.phrase}
                    onAnimationEnd={() => {
                        (pos === 2) ? setPos(0) : setPos(pos => pos + 1);
                        setAni(0);
                    }}
                    ani={ani}
                >
                    {pos === 0 ? <p><i>Servicio de Transporte de</i> <b>Calidad</b></p> : ''}
                    {pos === 1 ? <p><b>Seguridad</b> <i>en Todas Partes</i></p> : ''}
                    {pos === 2 ? <p><i>Modelos Nuevos para su</i> <b>Comodidad</b></p> : ''}
                </div>
                <div className={s.image2}></div>{/*<img src={Units1} alt={'logo'} />*/}
            </div>
            {/*<h1 className={s.title}>FIRST <b>LOGISTIC</b> AND SERVICE</h1>
            {
                len === 1 ?
                    <div className={s.body}>
                        <div className={s.desc}>
                            <h1>Transportando Lideres</h1>
                            <h2>
                                FLS es una empresa dedicada al transporte de personal,
                                brindando un servicio especializado de excelencia a
                                diversos sectores de la industria, como lo son automotriz,
                                electronica, agroindustrial, textil, metal, metalico
                                escolar y turismo.
                            </h2>
                        </div>
                        <div className={s.politicas}>
                            <div className={s.card}>
                                <h1>Mision</h1>
                                <h2>Cubrir tus necesidades</h2>
                                <h3>FLS nacio para cubrir las necesidades y espectativas de transporte de personal, proporcionando calidad y seguridad en los servicios, contribuyendo al logro de los objetivos de nuestros clientes.</h3>
                            </div>
                            <div className={s.card}>
                                <h1>Vision</h1>
                                <h2>Un proveedor competitivo</h2>
                                <h3>Ser el mejor y mas competitivo proveedor de servicios de transporte de personal, industrial y de turismo.</h3>
                            </div>
                            <div className={s.card}>
                                <h1>Valores</h1>
                                <h2>Los que nos caracteriza</h2>
                                <h3>Respeto, lealtad, honestidad, responsabilidad, puntualidad y compromiso.</h3>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter}>
                                <div><p>Servicio de Transporte de <b>Calidad</b></p></div>
                                <div><p><b>Seguridad</b> en Todas Partes</p></div>
                                <div><p>Modelos Nuevos para su <b>Comodidad</b></p></div>
                            </div>
                            <div className={s.img}>
                                <img src={Home2} alt={'logo'} />
                            </div>
                        </div>
                        <div className={s.desc2}>
                            <h1>Capacitaciones a Colaboradores</h1>
                            <h2>El compromiso con nuestros clientes, es actualizarnos en todos los aspectos del servicio de transporte de personal ejecutivo que prestamos diariamente al usuario del servicio, por eso nuestros colaboradores estan preparados y capacitados para tu atencion y seguridad.</h2>
                            <div className={s.list}>
                                <h2>Atencion al cliente y Enfoque a la Calidad del Servicio.</h2>
                                <h2>Prevencion y Combate Contra Incendios.</h2>
                                <h2>Primeros Auxilios RCP.</h2>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                len === 2 ?
                    <div className={s.body}>
                        <div className={s.desc}>
                            <h1>Transporting Leaders</h1>
                            <h2>
                                FLS is dedicated to employee transportation, offering an
                                excellent specialized service to industry sectors, such
                                as automotive, electronics, agro-industrial, textile,
                                metal, school metallic and tourism.
                            </h2>
                        </div>
                        <div className={s.politicas}>
                            <div className={s.card}>
                                <h1>Mission</h1>
                                <h2>Serve the client needs</h2>
                                <h3>FLS was born to serve the needs and expectancies of employee transport, offering security in the quality of our services, contributing to our clients goals.</h3>
                            </div>
                            <div className={s.card}>
                                <h1>Vision</h1>
                                <h2>Competitive provider</h2>
                                <h3>We want to be one of the best and more competitive employee transport, industrial transport and tourism transport</h3>
                            </div>
                            <div className={s.card}>
                                <h1>Values</h1>
                                <h2>Our features</h2>
                                <h3>Respect, loyalty, honesty, responsibility, punctuality and commitment.</h3>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter}>
                                <div><p><b>Quality</b> transportation service.</p></div>
                                <div><p><b>Safety</b> everywhere</p></div>
                                <div><p>New models for your <b>comfort</b></p></div>
                            </div>
                            <div className={s.img}>
                                <img src={Home2} alt={'logo'} />
                            </div>
                        </div>
                        <div className={s.desc2}>
                            <h1>Coaching for Coworker</h1>
                            <h2>Our commitment is to be updated ourselves in every aspect of transportation services. For that reason, our personnel are prepared to give attention and safety.</h2>
                            <div className={s.list}>
                                <h2>Quality service focused on the customer.</h2>
                                <h2>Fire Prevention and Fire Fighting</h2>
                                <h2>First Aid RCP</h2>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                len === 3 ?
                    <div className={s.body}>
                        <div className={s.desc}>
                            <h1>リーダーを輸送する</h1>
                            <h2>
                                FLSは様々なの輸送を提供します。我社のサービスは業界に優れたです。我社は自動車産業で電子産業で農業産業で繊維産業で金属産業と観光産業そして学校部に従業員の輸送を提供します。
                            </h2>
                        </div>
                        <div className={s.politicas}>
                            <div className={s.card}>
                                <h1>ミッション</h1>
                                <h2>お客様の必要をカバーします</h2>
                                <h3>産業の必要の輸送をカバーするならFLSが生まれました。品質なと安心なサービスを提供します、お客様の目的に成し遂げることに貢献します。</h3>
                            </div>
                            <div className={s.card}>
                                <h1>ビジョン</h1>
                                <h2>競争力のあるサプライヤー</h2>
                                <h3>我社は産業の輸送で従業員の輸送で観光の輸送で競争力のある一番サプラヤーに鳴ること望んでいます。</h3>
                            </div>
                            <div className={s.card}>
                                <h1>バリュー</h1>
                                <h2>我社の特徴</h2>
                                <h3>尊重、忠誠心、誠実さ、責任、時間厳守、および責任。</h3>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter}>
                                <div><p><b>品質</b>の輸送サービスです</p></div>
                                <div><p>どこでも<b>安全性</b>です</p></div>
                                <div><p><b>快適さ</b>の為に全部新しい輸送ユニットです</p></div>
                            </div>
                            <div className={s.img}>
                                <img src={Home2} alt={'logo'} />
                            </div>
                        </div>
                        <div className={s.desc2}>
                            <h1>同僚のためのトレーニング</h1>
                            <h2>私たちのコミットメントは、輸送サービスのあらゆる側面で自分自身を更新することです。そのため、当社の担当者は注意と安全を確保する用意があります。</h2>
                            <div className={s.list}>
                                <h2>カスタマーサービスとサービス品質に焦点を当てます。</h2>
                                <h2>防火と消火。</h2>
                                <h2>応急処置 CPR。</h2>
                            </div>
                        </div>
                    </div> : ''
            }*/}
        </div>
    );
}