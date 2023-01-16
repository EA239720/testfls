import s from '../styles/Division.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';

import uber from '../resources/logoflsGrande.png';
import camion from '../resources/logoflsCamion.png';
import camioneta from '../resources/logoflsCamioneta.png';
import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Division({ len, fun }) {
    return (
        <div className={s.division}>
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
                    </> : ''
            }
            {
                len === 2 ?
                    <>
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
                    </> : ''
            }
            {
                len === 3 ?
                    <>
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
                    </> : ''
            }
        </div>
    );
}