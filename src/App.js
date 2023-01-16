
import { useEffect, useState } from 'react';

import detectBrowserLanguage from 'detect-browser-language';

import Capacitacion from './components/Capacitacion';
import Contacto from './components/Contacto';
import Division from './components/Division';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import FootPage from './components/footpage';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Politicas from './components/Politicas';
import Unidades from './components/Unidades';
import Bolsa from './components/Bolsa';

import s from './styles/App.module.scss';

import { RiWhatsappLine } from 'react-icons/ri';

function App() {
	const [page, setPage] = useState(1);
	const [lenguages, setLenguages] = useState(1);
	const [menu, setMenu] = useState(0);

	useEffect(() => {
		if (detectBrowserLanguage() === 'en') {
			setLenguages(2);
		} else if (detectBrowserLanguage() === 'ja') {
			setLenguages(3);
		} else {
			setLenguages(1);
		}
	}, []);

	return (
		<div className={s.app}>
			<Menu fuk={setPage} len={lenguages} fun={setLenguages} funk={setMenu} men={menu} />
			{page === 1 ? <Inicio len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{page === 2 ? <Nosotros len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{page === 3 ? <Capacitacion len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{/*page === 3 ? <Politicas len={lenguages} fun={setLenguages} /> : ''}
			{page === 4 ? <Servicios len={lenguages} fun={setLenguages} /> : ''*/}
			{page === 4 ? <Unidades len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{/*page === 6 ? <Capacitacion len={lenguages} fun={setLenguages} /> : ''}
			{page === 7 ? <Division len={lenguages} fun={setLenguages} /> : ''*/}
			{page === 5 ? <Contacto len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{page === 6 ? <Bolsa len={lenguages} fun={setLenguages} funk={setMenu} men={menu} /> : ''}
			{/*<FootPage fuk={setPage} len={lenguages} fun={setLenguages} funk={setMenu} men={menu} />*/}
			<button className={s.ws}><RiWhatsappLine /></button>
		</div>
	);
}

export default App;
