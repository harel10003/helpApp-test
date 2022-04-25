import React, { useContext, useState } from 'react';
import { MdLocalPolice } from 'react-icons/md';
import { FaStarOfDavid } from 'react-icons/fa';
import { GiCampfire } from 'react-icons/gi';
import ContextApi from '../ContextApi';

function ButtonsHelp() {
	const { phone, setPhone, changePhone, showButton, setShowButton } =
		useContext(ContextApi);

	return (
		<div
			className="ButtonsHelp"
			style={{ display: showButton ? 'flex' : 'none' }}
		>
			<button
				style={{ backgroundColor: 101 === phone ? 'white' : 'gray' }}
				onClick={() => changePhone(101)}
			>
				<MdLocalPolice />
				101
			</button>
			<button
				style={{ backgroundColor: 100 === phone ? 'white' : 'gray' }}
				onClick={() => changePhone(100)}
			>
				{' '}
				<FaStarOfDavid />
				100
			</button>
			<button
				style={{ backgroundColor: 102 === phone ? 'white' : 'gray' }}
				onClick={() => changePhone(102)}
			>
				<GiCampfire />
				102
			</button>
		</div>
	);
}

export default ButtonsHelp;
