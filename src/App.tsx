import { useState } from 'react';
import LockLogo from './assets/Password.png';
import BuckLogo from './assets/Moose.png';
import Textbox from './componets/Textbox';
import PasswordDisplay from './componets/passwordDisplay';
import InputBox from './componets/inputbox';
import './App.css';

function App() {
	const [PasswordI, setPasswordI] = useState('');
	const [PasswordCount, setPasswordCount] = useState('');
	const [showInputBox, setShowInputBox] = useState(false);
	const [Clock, setClock] = useState<number>(5);
	const [Core, setCore] = useState<number>(4);

	const handleImageClick = () => {
		setShowInputBox(!showInputBox);
	};

	return (
		<>
			<InputBox
				showInputBox={showInputBox}
				setInputBox={setShowInputBox}
				Clock={Clock}
				setClock={setClock}
				Core={Core}
				setCore={setCore}
			/>

			<div>
				<h1> Brute Force Password Security Checker</h1>
			</div>
			<div className='container'>
				<a href='https://github.com/BuckJ12?tab=repositories' target='blank'>
					<img src={BuckLogo} className='logo' alt='Buck logo' />
				</a>
				<a onClick={handleImageClick}>
					<img src={LockLogo} className='logo' alt='Lock logo' />
				</a>
			</div>
			<div>
				{PasswordCount ? (
					<h2>
						{!isNaN(Number(PasswordCount))
							? `${Number(PasswordCount)} Possibilities`
							: PasswordCount}
					</h2>
				) : (
					<h2>Please Enter A password</h2>
				)}
			</div>
			<div>
				<form>
					<Textbox
						Password={PasswordI}
						setPassword={setPasswordI}
						setNumber={setPasswordCount}
					/>
				</form>
			</div>
			<div>
				<PasswordDisplay
					passwordPoss={PasswordCount}
					clockspeed={Clock}
					core={Core}
				/>
			</div>
		</>
	);
}

export default App;
