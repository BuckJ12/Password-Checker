import CloseButton from '../assets/Close_Button.png';

interface Props {
	showInputBox: boolean;
	setInputBox: React.Dispatch<React.SetStateAction<boolean>>;
	Clock: number;
	setClock: React.Dispatch<React.SetStateAction<number>>;
	Core: number;
	setCore: React.Dispatch<React.SetStateAction<number>>;
}

const InputBox = ({
	showInputBox,
	setInputBox,
	Clock,
	setClock,
	Core,
	setCore,
}: Props) => {
	const handleChangeClock = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClock(Number(event.target.value));
	};

	const handleChangeCore = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCore(Number(event.target.value));
	};

	const handleClose = () => {
		setInputBox(!showInputBox);
	};

	return (
		<div>
			<div className={`input-box ${showInputBox ? 'visible' : ''}`}>
				<div className='closeButton' onClick={handleClose}>
					<a href='#'>
						<img src={CloseButton} />
					</a>
				</div>
				<h2>Advanced Settings</h2>
				<input
					type='range'
					min='0.1'
					max='10'
					step='0.1'
					value={Clock}
					onChange={handleChangeClock}
				/>
				<p> Clock Speed {Clock} GHz</p>
				<p className='explain'>
					Clock Speed affects how many possibilities can be tried per second
					Default: 5
				</p>

				<input
					type='range'
					min='1'
					max='127'
					step='1'
					value={Core}
					onChange={handleChangeCore}
				/>
				<p> Core Count: {Core} </p>
				<p className='explain'>
					Core Count effects how many instances of the brute force program are
					run at a time Default: 4
				</p>
			</div>
		</div>
	);
};

export default InputBox;
