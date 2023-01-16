import s from '../styles/Contacto.module.scss';

import { ImMenu } from 'react-icons/im';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

import { RiInstagramFill, RiFacebookBoxFill, RiLinkedinBoxFill, RiWhatsappFill, RiMailFill, RiWhatsappLine } from 'react-icons/ri';

export default function Bolsa({ len, fun, funk, men }) {
    return (
        <div className={s.contacto}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            <div className={s.bolsa}>
                <div className={s.card}>
                    <h2>Operador Sedan</h2>
                    <div>
                        <h3>Requisitos</h3>
                        <ul>
                            <li>Sexo Indistinto</li>
                            <li>Licencia Tipo A</li>
                            <li>Experiencia en Transporte de Personal</li>
                            <li>Disponibilidad de Horarios</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ofrecemos</h3>
                        <ul>
                            <li>Pago Semanal</li>
                            <li>Prestaciones de Ley</li>
                            <li>Capacitacion Constante</li>
                            <li>Crecimiento Laboral</li>
                        </ul>
                    </div>
                </div>
                <div className={s.card}>
                    <h2>Operador Van</h2>
                    <div>
                        <h3>Requisitos</h3>
                        <ul>
                            <li>Sexo Indistinto</li>
                            <li>Licencia Tipo A</li>
                            <li>Experiencia en Manejo de Combi</li>
                            <li>Experiencia en Transporte de Personal</li>
                            <li>Disponibilidad de Horarios</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ofrecemos</h3>
                        <ul>
                            <li>Pago Semanal</li>
                            <li>Prestaciones de Ley</li>
                            <li>Capacitacion Constante</li>
                            <li>Crecimiento Laboral</li>
                        </ul>
                    </div>
                </div>
                <div className={s.card}>
                    <h2>Operador Bus</h2>
                    <div>
                        <h3>Requisitos</h3>
                        <ul>
                            <li>Sexo Indistinto</li>
                            <li>Licencia Tipo A</li>
                            <li>Experiencia en Manejo de Camion</li>
                            <li>Experiencia en Transporte de Personal</li>
                            <li>Disponibilidad de Horarios</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ofrecemos</h3>
                        <ul>
                            <li>Pago Semanal</li>
                            <li>Prestaciones de Ley</li>
                            <li>Capacitacion Constante</li>
                            <li>Crecimiento Laboral</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}