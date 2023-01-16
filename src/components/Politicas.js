import s from '../styles/Politicas.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';

import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Politicas({ len, fun }) {
    return (
        <div className={s.politicas}>
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
                    </> : ''
            }
            {
                len === 2 ?
                    <>
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
                    </> : ''
            }
            {
                len === 3 ?
                    <>
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
                    </> : ''
            }
        </div>
    );
}