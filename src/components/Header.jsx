import React, { useContext } from 'react';
import { FaStarOfDavid } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import ContextApi from '../ContextApi';
import ButtonsHelp from './ButtonsHelp';

function Header() {
	const { phone, showButton, setShowButton, logo } = useContext(ContextApi);
	return (
		<div>
			<header className="AppPage-header">
				<div className="AppPage-header-101">
					{logo()} <span>{phone}</span>
				</div>
				<div
					className="AppPage-header-burger"
					onClick={() => setShowButton(!showButton)}
				>
					<AiOutlineMenu />
				</div>
			</header>
			<ButtonsHelp />
		</div>
	);
}

export default Header;
