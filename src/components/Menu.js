import ReactTooltip from 'react-tooltip';

import s from '../styles/Menu.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosListBox, IoIosBus } from 'react-icons/io';
import { MdMiscellaneousServices, MdOutlineSafetyDivider, MdContactSupport } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaToolbox } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { ImUserTie } from 'react-icons/im';

import Logo from '../resources/logoflsGrandeBlanco.png';
import jp from '../resources/jp.png';
import en from '../resources/en.png';
import es from '../resources/es.png';

export default function Menu({ fuk, len, fun, funk, men }) {
	return (
		<div className={s.menu} men={men}>
			<img className={s.logo} src={Logo} alt={'logo'} />
			<div className={s.body}>
				{len === 1 ? <button onClick={() => { fuk(2); funk(0); }}><HiUserGroup />{' '}<p>Nosotros</p></button> : ''}
				{len === 2 ? <button onClick={() => { fuk(2); funk(0); }}><HiUserGroup />{' '}<p>About Us</p></button> : ''}
				{len === 3 ? <button onClick={() => { fuk(2); funk(0); }}><HiUserGroup />{' '}<p>我社</p></button> : ''}
				{/*<button data-tip data-for='poli' onClick={() => fuk(3)}><IoIosListBox /></button>
				<ReactTooltip id='poli' type='light' effect='solid'>
					<span>Politicas</span>
				</ReactTooltip>
				<button data-tip data-for='serv' onClick={() => fuk(4)}><MdMiscellaneousServices /></button>
				<ReactTooltip id='serv' type='light' effect='solid'>
					<span>Servicios</span>
				</ReactTooltip>*/}
				{len === 1 ? <button onClick={() => { fuk(3); funk(0); }}><ImUserTie />{' '}<p>Colaboradores</p></button> : ''}
				{len === 1 ? <button onClick={() => { fuk(4); funk(0); }}><IoIosBus />{' '}<p>Unidades</p></button> : ''}
				{len === 2 ? <button onClick={() => { fuk(4); funk(0); }}><IoIosBus />{' '}<p>Units</p></button> : ''}
				{len === 3 ? <button onClick={() => { fuk(4); funk(0); }}><IoIosBus />{' '}<p>輸送サービス</p></button> : ''}
				{/*<button data-tip data-for='capa' onClick={() => fuk(6)}><GiTeacher /></button>
				<ReactTooltip id='capa' type='light' effect='solid'>
					<span>Capacitación</span>
				</ReactTooltip>
				<button data-tip data-for='divi' onClick={() => fuk(7)}><MdOutlineSafetyDivider /></button>
				<ReactTooltip id='divi' type='light' effect='solid'>
					<span>Divisiones</span>
				</ReactTooltip>*/}
				{len === 1 ? <button onClick={() => { fuk(5); funk(0); }}><RiContactsFill />{' '}<p>Contacto</p></button> : ''}
				{len === 2 ? <button onClick={() => { fuk(5); funk(0); }}><RiContactsFill />{' '}<p>Contact Us</p></button> : ''}
				{len === 3 ? <button onClick={() => { fuk(5); funk(0); }}><RiContactsFill />{' '}<p>連絡先</p></button> : ''}
				{len === 1 ? <button onClick={() => { fuk(6); funk(0); }}><FaToolbox />{' '}<p>Bolsa de Trabajo</p></button> : ''}
			</div>
			<div className={s.subMenu}>
				{/*<button className={s.ws}><RiWhatsappLine /></button>*/}
				<button><img className={s.flag} src={jp} alt={'japanese'} onClick={() => fun(3)} /></button>
				<button><img className={s.flag} src={en} alt={'english'} onClick={() => fun(2)} /></button>
				<button><img className={s.flag} src={es} alt={'spanish'} onClick={() => fun(1)} /></button>
			</div>
		</div>
	);
}