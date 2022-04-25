import React, { useContext, useState } from 'react';
import '../App.css';

import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import ContextApi from '../ContextApi';
import Header from '../components/Header';
import ButtonsHelp from '../components/ButtonsHelp';

function AppPage() {
	const nav = useNavigate();
	const { phone } = useContext(ContextApi);

	return (
		<div>
			<Header />

			<div className="AppPage-body">
				<button
					onClick={() => {
						nav(`/help/${phone}`);
					}}
					className="AppPage-bigbutton"
				>
					הצילו
				</button>
			</div>
			<Footer />
		</div>
	);
}

export default AppPage;
