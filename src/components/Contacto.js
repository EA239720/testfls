import s from '../styles/Contacto.module.scss';

import { ImMenu } from 'react-icons/im';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

import { RiInstagramFill, RiFacebookBoxFill, RiLinkedinBoxFill, RiWhatsappFill, RiMailFill, RiWhatsappLine } from 'react-icons/ri';

export default function Contacto({ len, fun, funk, men }) {
    return (
        <div className={s.contacto}>
            {men === 0 ? <button className={s.openMenu} onClick={() => funk(1)}><ImMenu /></button> : ''}
            {
                len === 1 ?
                    <div className={s.titles}>
                        <h1 className={s.title}>Contactanos</h1>
                        <h1>Queremos escucharte</h1>
                    </div> : ''
            }
            {
                len === 2 ?
                    <div className={s.titles}>
                        <h1 className={s.title}>Contact Us</h1>
                        <h1>We want to know you valuable opinion.</h1>
                    </div> : ''
            }
            {
                len === 3 ?
                    <div className={s.titles}>
                        <h1 className={s.title}>我社に連絡してください</h1>
                        <h1>お客様の意見を聞きたいです</h1>
                    </div> : ''
            }
            <div className={s.contactos}>
                <div className={s.info}>
                    {len === 1 ? <h1>Para contratar nuestro servicio</h1> : ''}
                    {len === 2 ? <h1>To hire our service</h1> : ''}
                    {len === 3 ? <h1>私たちのサービスを雇うには</h1> : ''}
                    <div className={s.inter}>
                        <h1><RiMailFill /></h1>
                        <h1>ventas@servicioylogistica.com.mx</h1>
                    </div>
                    <div className={s.inter}>
                        <h1><RiWhatsappFill /></h1>
                        <h1>449 428 9008</h1>
                    </div>
                </div>
                <div className={s.info}>
                    {len === 1 ? <h1>Para trabajar con nosotros</h1> : ''}
                    {len === 2 ? <h1>To work with us</h1> : ''}
                    {len === 3 ? <h1>私たちのために働く</h1> : ''}
                    <div className={s.inter}>
                        <h1><RiMailFill /></h1>
                        <h1>comercializacion@servicioylogistica.com.mx</h1>
                    </div>
                    <div className={s.inter}>
                        <h1><RiWhatsappFill /></h1>
                        <h1>449 182 2943</h1>
                    </div>
                </div>
            </div>
            <div className={s.iconos}>
                <a href='https://www.instagram.com/firstlogisticandservice/' target='_blank'><RiInstagramFill />{' '}<p>/firstlogisticandservice</p></a>
                <a href='https://www.facebook.com/firstlogisticandservice/' target='_blank'><RiFacebookBoxFill />{' '}<p>/firstlogisticandservice</p></a>
                <a href='https://www.linkedin.com/in/first-logistic-and-service-192a81211/' target='_blank'><RiLinkedinBoxFill />{' '}<p>/in/first-logistic-and-service-192a81211</p></a>
            </div>
        </div>
    );
}