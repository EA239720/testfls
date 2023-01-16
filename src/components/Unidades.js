import s from '../styles/Unidades.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';

import uber from '../resources/logoflsGrande.png';
import camion from '../resources/logoflsCamion.png';
import camioneta from '../resources/logoflsCamioneta.png';
import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Unidades({ len, fun, funk, men }) {
    return (
        <div className={s.unidades}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            <div className={s.divisions}>
                <div className={s.card}>
                    <img className={s.logo} src={uber} alt={'logo'} />
                    <h1>SEDAN</h1>
                    <h2>Division tipo uber con unidades enfocadas en la comodidad para el transporte placentero de los ejecutivos y administrativos de la empresa.</h2>
                </div>
                <div className={s.card}>
                    <img className={s.logo} src={camioneta} alt={'logo'} />
                    <h1>VAN</h1>
                    <h2>Vehiculos de tamaño mediano con una gran movilidad para traslados rapidos y seguros de su plantilla.</h2>
                </div>
                <div className={s.card}>
                    <img className={s.logo} src={camion} alt={'logo'} />
                    <h1>BUS</h1>
                    <h2>Autobuses equipados en comodidad y seguridad para el transporte de un gran volumen de empleados.</h2>
                </div>
                <div className={s.image2}></div>
            </div>
            <div className={s.carac}>
                <div className={s.grid}>
                    <div>
                        <h2>Cada unidad cuenta con el equipo adecuado para que su viaje sea un servicio  cómodo y seguro.</h2>
                    </div>
                    <div>
                        <h2>Todas nuestras unidades son de modelo reciente, para brindar comodidad, seguridad y estilo.</h2>
                    </div>
                    <div>
                        <h2>Contamos con un sistema de monitoreo mediante dispositivos móviles, brindando seguridad a los lideres del bienestar de sus empleados.</h2>
                    </div>
                    <div>
                        <h2>Cada servicio que brindamos se monitorea y rastrea de punto a punto durante todo el recorrido.</h2>
                    </div>
                    <div>
                        <h2>Tenemos un compromiso con la preservación del medio ambiente, por ello nuestras unidades innovan en el uso de energías limpias.</h2>
                    </div>
                    <div>
                        <h2>Buscamos ser una empresa innovadora y vanguardista en el sector del transporte, introduciendo nuevas tecnologías que faciliten el cumplimiento de nuestros objetivos.</h2>
                    </div>
                </div>
                <div className={s.image3}></div>
            </div>
            <div className={s.servi}>
                <div className={s.card}>
                    <h1>Transporte de Personal</h1>
                    <h2>El capital mas importante de cualquier empresa es su fuerza de trabajo, por lo tanto se debe asegurar su traslado de manera segura y eficiente. Y nosotros aseguramos aquello y mas.</h2>
                </div>
                <div className={s.card}>
                    <h1>Transporte Ejecutivo</h1>
                    <h2>Sabemos que los ejecutivos de una empresa son personas que debe recibir un trato adecuado, por ello empleamos unidades recientes buscando brindar gran comodidad y máxima seguridad.</h2>
                </div>
                <div className={s.card}>
                    <h1>Transporte Turistico</h1>
                    <h2>Transportamos a nuestros usuarios a cualquier parte de la ciudad y al resto de la república, enfocándonos en la comodidad y en la seguridad del viaje.</h2>
                </div>
                <div className={s.image4}></div>
            </div>
            {/*
                len === 1 ?
                    <>
                        <div className={s.divisions}>
                            <div className={s.card}>
                                <img className={s.logo} src={uber} alt={'logo'} />
                                <h1>SEDAN</h1>
                                <h2>Division tipo uber con unidades enfocadas en la comodidad para el transporte placentero de los ejecutivos y administrativos de la empresa.</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camioneta} alt={'logo'} />
                                <h1>VAN</h1>
                                <h2>Vehiculos de tamaño mediano con una gran movilidad para traslados rapidos y seguros de su plantilla.</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camion} alt={'logo'} />
                                <h1>BUS</h1>
                                <h2>Autobuses equipados en comodidad y seguridad para el transporte de un gran volumen de empleados.</h2>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter1}>
                                <h1>Cada auto cuenta con el equipo adecuado para que tu viaje sea de lo mas placentero y seguro.<br /><br /><br />Todas nuestras unidades son de modelo reciente, para brindarle comodidad y estilo.</h1>
                            </div>
                            <div className={s.inter2}>
                                <h1>Plataforma monitoreada por dispositivos moviles.<br /><br /><br />Centro de monitoreo las 24 horas del dia.<br /><br /><br />Rastreo de punto a punto en todo su recorrido.</h1>
                            </div>
                        </div>
                        <div className={s.services}>
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
                        </div>
                    </> : ''
            }
            {
                len === 2 ?
                    <>
                        <div className={s.divisions}>
                            <div className={s.card}>
                                <img className={s.logo} src={uber} alt={'logo'} />
                                <h1>SEDAN</h1>
                                <h2>Uber-type division focused on comfort for a pleasant trip of administrative staff.</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camioneta} alt={'logo'} />
                                <h1>VAN</h1>
                                <h2>Medium-sized vehicles with great mobility for quick and safe travel of your staff.</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camion} alt={'logo'} />
                                <h1>BUS</h1>
                                <h2>Buses equipped with comfort and safety to move a large volume of employees.</h2>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter1}>
                                <h1>Every transport have the equipment for you route would be secure and comfort at any time.<br /><br /><br />Our transports are newest models, offering security and comfort.</h1>
                            </div>
                            <div className={s.inter2}>
                                <h1>Tracking platform monitored by mobile devices.<br /><br /><br />24 hours monitor center.<br /><br /><br />Point-to-point tracking system.</h1>
                            </div>
                        </div>
                        <div className={s.services}>
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
                        </div>
                    </> : ''
            }
            {
                len === 3 ?
                    <>
                        <div className={s.divisions}>
                            <div className={s.card}>
                                <img className={s.logo} src={uber} alt={'logo'} />
                                <h1>セダン</h1>
                                <h2>ユーバータイプの部門は、管理スタッフの快適な旅行のための快適さに焦点を当てました。</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camioneta} alt={'logo'} />
                                <h1>バン</h1>
                                <h2>スタッフの迅速かつ安全な移動のための優れた機動性を備えた中型車両。</h2>
                            </div>
                            <div className={s.card}>
                                <img className={s.logo} src={camion} alt={'logo'} />
                                <h1>バス</h1>
                                <h2>大量の従業員を移動させるための快適性と安全性を備えたバス。</h2>
                            </div>
                        </div>
                        <div className={s.lista}>
                            <div className={s.inter1}>
                                <h1>各車には、旅行を快適で安全なものにするための適切な設備が備わっています。<br /><br /><br />我社の輸送ユニットは新しいユニットですからお客様に安全と快適を提供することができます。</h1>
                            </div>
                            <div className={s.inter2}>
                                <h1>携携帯電話によって監視をGPS機能。<br /><br /><br />24時監視センター。<br /><br /><br />旅行中ポイントトツーポイント追跡。</h1>
                            </div>
                        </div>
                        <div className={s.services}>
                            <div className={s.card}>
                                <div className={s.info}>
                                    <h1>従業員輸送</h1>
                                    <h3>我社は働くの場所へ安全と快適にお客様の従業員を輸送します。</h3>
                                </div>
                                <div className={s.info}>
                                    <h1>エグゼクティブ輸送</h1>
                                    <h3>我社の輸送サービスは常にお客様のプロジェクトに存在します。</h3>
                                </div>
                                <div className={s.info}>
                                    <h1>観光輸送</h1>
                                    <h3>お客様のための町のどこでもへ観光輸送のサービス。</h3>
                                </div>
                            </div>
                        </div>
                    </> : ''
            */}
        </div>
    );
}