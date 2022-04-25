import React, { useContext } from 'react';

import Footer from '../components/Footer';
import ContextApi from '../ContextApi';

function Home() {
	const {
		name,
		setName,
		pass,
		setPass,
		validName,
		setValidName,
		validPass,
		setValidPass,
		arrNane,
		setArrName,
		arrPass,
		setArrPass,
		fValidName,
		fValidPass,
	} = useContext(ContextApi);

	return (
		<div className="home">
			<div className="home-header">
				<h1>הרשמה</h1>
			</div>
			<div className="home-body">
				<p className="home-err">{arrNane}</p>
				<input
					className="home-input"
					type="text"
					placeholder="שם מלא"
					onChange={(e) => fValidName(e.target.value)}
				/>
				<p className="home-err">{arrPass}</p>
				<input
					className="home-input"
					type="password"
					placeholder="סיסמה"
					onChange={(e) => fValidPass(e.target.value)}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
