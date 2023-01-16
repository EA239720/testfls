import s from '../styles/Nosotros.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

import agro from '../resources/newResources/Agro.png';
import textil from '../resources/newResources/Textil.png';
import auto from '../resources/newResources/Auto.png';
import electro from '../resources/newResources/Electro.png';
import metal from '../resources/newResources/Metal.png';
import responsabilidad from '../resources/newResources/g955.png';
import compromiso from '../resources/newResources/g960.png';
import respeto from '../resources/newResources/g2804.png';
import puntualidad from '../resources/newResources/g2813.png';
import honestidad from '../resources/newResources/g4453.png';
import lealtad from '../resources/newResources/g5142.png';

export default function Nosotros({ len, fun, funk, men }) {
    return (
        <div className={s.nosotros}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            <div className={s.parallax}>
                <div className={s.desc}>
                    <h1>Transportando Lideres</h1>
                    <h2>
                        FLS es una empresa dedicada al transporte de personal,
                        nosotros no brindamos un servicio, brindamos un resultado
                        especializado de excelencia a diversos sectores de la industria.
                        Nos enfocamos en brindar seguridad, comodidad y eficiencia,
                        mediante el empleo de modelos recientes en las unidades de
                        nuestras tres divisiones de transporte.
                    </h2>
                </div>
            </div>
            <div className={s.sect}>
                <h1 className={s.title}>Sectores con los que trabajamos</h1>
                <div className={s.grid}>
                    <div>
                        <div><img src={auto} alt={'auto'} /></div>
                        <h1>AUTOMOTRIZ</h1>
                    </div>
                    <div>
                        <div><img src={electro} alt={'electro'} /></div>
                        <h1>ELECTRONICA</h1>
                    </div>
                    <div>
                        <div><img src={agro} alt={'agro'} /></div>
                        <h1>AGROINDUSTRIAL</h1>
                    </div>
                    <div>
                        <div><img src={textil} alt={'textil'} /></div>
                        <h1>TEXTIL</h1>
                    </div>
                    <div>
                        <div><img src={metal} alt={'metal'} /></div>
                        <h1>METAL</h1>
                    </div>
                    <div>
                        <h1>ENTRE OTROS...</h1>
                    </div>
                </div>
            </div>
            <div className={s.paralax}>
                <div className={s.poli}>
                    <div>
                        <h1>MISION</h1>
                        <h3>FLS nació para cubrir las necesidades y expectativas
                            de transporte de personal, proporcionando calidad y
                            seguridad en los servicios, contribuyendo al logro
                            de los objetivos de nuestros clientes.</h3>
                    </div>
                    <div>
                        <h1>VISION</h1>
                        <h3>Ser el mejor y mas competitivo proveedor de servicios
                            de transporte de personal industrial y de turismo</h3>
                    </div>
                </div>
            </div>
            <div className={s.valo}>
                <h1 className={s.title}>VALORES</h1>
                <div className={s.grid}>
                    <div>
                        <div><img src={respeto} alt={'respeto'} /></div>
                        <h1>RESPETO</h1>
                        <h3>El cliente es para nosotros importante, y lo demostramos en el respeto que le damos.</h3>
                    </div>
                    <div>
                        <div><img src={lealtad} alt={'lealtad'} /></div>
                        <h1>LEALTAD</h1>
                        <h3> La lealtad es un pilar importante en cualquier relación comercial para nosotros.</h3>
                    </div>
                    <div>
                        <div><img src={honestidad} alt={'honestidad'} /></div>
                        <h1>HONESTIDAD</h1>
                        <h3>Una excelente comunicación caracteriza el resultado que ofrecemos.</h3>
                    </div>
                    <div>
                        <div><img src={responsabilidad} alt={'responsabilidad'} /></div>
                        <h1>RESPONSABILIDAD</h1>
                        <h3>No solo somos responsables con nuestros operadores sino también con el personal del cliente y con los objetivos a lograr.</h3>
                    </div>
                    <div>
                        <div><img src={puntualidad} alt={'puntualidad'} /></div>
                        <h1>PUNTUALIDAD</h1>
                        <h3>Somos un servicio especializado en puntualidad y cumplimiento, totalmente comprometidos con nuestros clientes.</h3>
                    </div>
                    <div>
                        <div><img src={compromiso} alt={'compromiso'} /></div>
                        <h1>COMPROMISO</h1>
                        <h3>Los compromisos con nuestros clientes son prioridad para nosotros.</h3>
                    </div>
                </div>
            </div>
            {/*
                len === 1 ?
                    <div className={s.desc}>
                        <h1>Transportando Lideres</h1>
                        <h2>
                            FLS es una empresa dedicada al transporte de personal,
                            nosotros no brindando un servicio, brindamos un resultado
                            especializado de excelencia a diversos sectores de la industria.
                            Nos enfocamos en brindar seguridad, comodidad y eficiencia,
                            mediante el empleo de modelos recientes en las unidades de
                            nuestras tres divisiones de transporte.
                        </h2>
                    </div> : ''
            }
            {
                len === 2 ?
                    <div className={s.desc}>
                        <h1>Transporting Leaders</h1>
                        <h2>
                            FLS is dedicated to employee transportation, offering an
                            excellent specialized service to industry sectors, such
                            as automotive, electronics, agro-industrial, textile,
                            metal, school metallic and tourism.
                        </h2>
                    </div> : ''
            }
            {
                len === 3 ?
                    <div className={s.desc}>
                        <h1>リーダーを輸送する</h1>
                        <h2>
                            FLSは様々なの輸送を提供します。我社のサービスは業界に優れたです。我社は自動車産業で電子産業で農業産業で繊維産業で金属産業と観光産業そして学校部に従業員の輸送を提供します。
                        </h2>
                    </div> : ''
            */}
        </div>
    );
}