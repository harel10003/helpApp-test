import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContextApi from '../ContextApi';

function Help() {
	const nav = useNavigate();
	const {
		name,
		pass,
		phone,
		btnD,
		setBtnD,
		msgCancel,
		setMsgCancel,
		passCheck,
		setPassCheck,
		helpName,
		setHelpName,
		cancels,
		setCancels,
		choice,
		setChoice,
		showInput,
		setShowInput,
		cancel,
	} = useContext(ContextApi);

	return (
		<div>
			<Header />
			<div className="help-info">
				<div className="help-msg1">
					{phone} {helpName}
				</div>
				<div className="help-msg2">{name}</div>
			</div>

			<button
				className="help-cancel"
				onClick={() => {
					setShowInput(true);
				}}
				disabled={btnD}
			>
				ביטול
			</button>
			<p>{msgCancel}</p>
			<div style={{ display: showInput === true ? 'block' : 'none' }}>
				<input
					value={passCheck}
					type="password"
					onChange={(e) => setPassCheck(e.target.value)}
					placeholder="enter your password"
				/>

				<button
					onClick={() => {
						cancel();
					}}
				>
					send
				</button>
			</div>
		</div>
	);
}

export default Help;
