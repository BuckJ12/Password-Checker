/* eslint-disable no-useless-escape */

import file from './100000-most-common-passwords.txt';
interface Props {
	Password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	setNumber: React.Dispatch<React.SetStateAction<string>>;
}

//Function checks for UpperCase Letters in String
function hasUpperCase(str: string): boolean {
	return /[A-Z]/.test(str);
}

//Function checks for LowerCase Letters in String
function hasLowerCase(str: string): boolean {
	return /[a-z]/.test(str);
}

//Function checks for Numbers in String
function hasNumber(str: string): boolean {
	return /\d/.test(str);
}

//Function checks for Symbols located on the number Keys in String
function hasSymbolAboveNumbers(str: string): boolean {
	return /[!@#$%^&*()]/.test(str);
}

//Function checks for Other Symbols on side of keyboard in String
function hasSpecificSymbols(str: string): boolean {
	return /[{}?_\-+=\[\]]/.test(str);
}

const Textbox = ({ Password, setPassword, setNumber }: Props) => {
	return (
		<input
			value={Password}
			onChange={(e) => {
				//Takes in Password from textbox
				setPassword(e.target.value);
				let exp: number = 0;
				let fNum = 0;
				let passwordList: string[];

				//Tests if only valid characters are present
				if (/^[{}?_\[\]\-+=!@#$%^&*()\dA-Za-z]+$/.test(e.target.value)) {
					//Check against 1,000,000 most common passwords
					fetch(file)
						.then((response) => response.text())
						.then((data) => {
							passwordList = data.split(/\r?\n/);
							console.log(passwordList);

							if (passwordList.includes(e.target.value)) {
								setNumber(
									'Your Password is in the top 100000 most common passwords'
								);
							}
						});

					//Tests for each type of charater used in brute force attack
					exp += hasUpperCase(e.target.value) ? 26 : 0;
					exp += hasLowerCase(e.target.value) ? 26 : 0;
					exp += hasNumber(e.target.value) ? 10 : 0;
					exp += hasSymbolAboveNumbers(e.target.value) ? 10 : 0;
					exp += hasSpecificSymbols(e.target.value) ? 10 : 0;

					fNum = Number(Math.pow(exp, e.target.value.length).toPrecision(3));

					setNumber(fNum + '');

					//Returns message for invalid or empty password
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
