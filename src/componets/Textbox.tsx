/* eslint-disable no-useless-escape */
import React from 'react';
interface Props {
	Password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	setNumber: React.Dispatch<React.SetStateAction<string>>;
}

function hasUpperCase(str: string): boolean {
	return /[A-Z]/.test(str);
}

function hasLowerCase(str: string): boolean {
	return /[a-z]/.test(str);
}

function hasNumber(str: string): boolean {
	return /\d/.test(str);
}

function hasSymbolAboveNumbers(str: string): boolean {
	return /[!@#$%^&*()]/.test(str);
}

function hasSpecificSymbols(str: string): boolean {
	return /[{}?_\-+=\[\]]/.test(str);
}

const Textbox = ({ Password, setPassword, setNumber }: Props) => {
	return (
		<input
			value={Password}
			onChange={(e) => {
				setPassword(e.target.value);
				let exp: number = 0;
				let fNum = 0;
				if (/^[{}?_\[\]\-+=!@#$%^&*()\dA-Za-z]+$/.test(e.target.value)) {
					const hasUpper: boolean = hasUpperCase(e.target.value);
					const hasLower: boolean = hasLowerCase(e.target.value);
					const hasNum: boolean = hasNumber(e.target.value);
					const hasUpSymbol: boolean = hasSymbolAboveNumbers(e.target.value);
					const hasLeftSymbol: boolean = hasSpecificSymbols(e.target.value);

					exp += hasUpper ? 26 : 0;
					exp += hasLower ? 26 : 0;
					exp += hasNum ? 10 : 0;
					exp += hasUpSymbol ? 10 : 0;
					exp += hasLeftSymbol ? 10 : 0;

					fNum = Number(Math.pow(exp, e.target.value.length).toPrecision(3));

					setNumber(fNum + '');
				} else if (e.target.value.length == 0) {
					setNumber('Please Enter A password');
				} else {
					setNumber('Invaild Character in Password');
				}
			}}
		/>
	);
};

export default Textbox;
