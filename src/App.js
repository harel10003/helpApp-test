import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom';
import './App.css';
import ContextApi from './ContextApi';
import AppPage from './pages/AppPage';
import Help from './pages/Help';
import Home from './pages/Home';
import { MdLocalPolice } from 'react-icons/md';
import { FaStarOfDavid } from 'react-icons/fa';
import { GiCampfire } from 'react-icons/gi';

function App() {
	const nav = useNavigate();
	const [name, setName] = useState('');
	const [pass, setPass] = useState('');
	const [validName, setValidName] = useState(false);
	const [validPass, setValidPass] = useState(false);
	const [arrNane, setArrName] = useState('');
	const [arrPass, setArrPass] = useState('');
	const [phone, setPhone] = useState(101);

	const [btnD, setBtnD] = useState(false);
	const [msgCancel, setMsgCancel] = useState('');
	const [passCheck, setPassCheck] = useState('');
	const [helpName, setHelpName] = useState('');
	const [cancels, setCancels] = useState(0);
	const [choice, setChoice] = useState(0);
	const [showInput, setShowInput] = useState(false);

	useEffect(() => {
		if (validName && validPass) {
			nav(`/app/${name}`);
			setValidName(false);
			setValidPass(false);
		}

		if (cancels === 3) {
			setBtnD(true);
			setMsgCancel('you are locked');
			setShowInput(false);
		}
		if (choice === 2) {
			setName('');
			setPass('');
			return nav(`/`);
		}

		if (phone === 101) setHelpName('מגן דוד אדום');
		else if (phone === 100) setHelpName('משטרה');
		else if (phone === 102) setHelpName('כיבוי אש');
	}, [validName, validPass, phone, cancels, choice]);

	const fValidName = (e) => {
		let temp = e;
		if (temp.length > 0 && temp.length < 4) {
			setValidName(false);
			return setArrName('enter 4 or more laters');
		}
		for (let i = 0; i < temp.length; i++) {
			if (temp[i].toLowerCase() > 'z' && temp[i].toLowerCase() < 'a') {
				setValidName(false);
				return setArrName('not valid enter name');
			}
		}
		setName(e);
		setArrName('');
		setValidName(true);
	};

	const fValidPass = (e) => {
		let temp = e.toLowerCase();
		let leter = 0;
		let number = 0;
		if (temp.length > 0 && temp.length < 8) {
			setValidPass(false);
			return setArrPass('enter 8 or more laters/number');
		}
		for (let i = 0; i < temp.length; i++) {
			if (temp[i] >= '0' && temp[i] <= '9') number++;
			if (temp[i] >= 'a' && temp[i] <= 'z') leter++;
		}
		if (leter > 0 && number > 0) {
			setPass(temp);
			setValidPass(true);
			return setArrPass('');
		} else setArrPass('not valid pass');
	};

	const [showButton, setShowButton] = useState(false);
	const changePhone = (num) => {
		setPhone(num);
		setShowButton(false);
	};
	const logo = () => {
		if (phone === 100) return <FaStarOfDavid />;
		if (phone === 101) return <MdLocalPolice />;
		if (phone === 102) return <GiCampfire />;
	};

	const cancel = () => {
		if (passCheck === pass) {
			setChoice(choice + 1);
			setMsgCancel('one more time');
		} else {
			setCancels(cancels + 1);
			setMsgCancel('password not true');
		}

		setPassCheck('');
	};

	return (
		<div className="App">
			<ContextApi.Provider
				value={{
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
					phone,
					setPhone,
					showButton,
					setShowButton,
					changePhone,
					logo,
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
				}}
			>
				{/* <Router> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/app/:name" element={<AppPage />} />
					<Route path="/help/:phone" element={<Help />} />
					{/*<Route path="/traning/:fullname" element={<Tranning />} />
      <Route path="/runs/:NO" element={<RunPage />} />*/}
				</Routes>
				{/* </Router> */}
			</ContextApi.Provider>
		</div>
	);
}

export default App;
