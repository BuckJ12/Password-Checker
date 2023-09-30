import { useState } from 'react';
import LockLogo from './assets/Password.png';
import BuckLogo from './assets/Moose.png';
import Textbox from './componets/Textbox';
import PasswordDisplay from './componets/passwordDisplay';
import './App.css';

function App() {
	const [PasswordI, setPasswordI] = useState('');
	const [PasswordCount, setPasswordCount] = useState('');
	//const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1> Password Security Checker</h1>
			</div>
			<div className='container'>
				<a href='#'>
					<img src={BuckLogo} className='logo' alt='Buck logo' />
				</a>
				<a href='#'>
					<img src={LockLogo} className='logo' alt='Lock logo' />
				</a>
			</div>
			<div>
				{PasswordCount ? (
					<h1>
						{!isNaN(Number(PasswordCount))
							? `${Number(PasswordCount)} Possibilities`
							: PasswordCount}
					</h1>
				) : (
					<h1>Please Enter A password</h1>
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
				<PasswordDisplay passwordPoss={PasswordCount} clockspeed={5000000000} />
			</div>
		</>
	);
}

export default App;
