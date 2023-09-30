import React from 'react';

interface Props {
	passwordPoss: string;
	clockspeed: number;
}

function convertTimeToSmallestUnit(time: number) {
	const units = [
		'seconds',
		'minutes',
		'hours',
		'days',
		'weeks',
		'months',
		'years',
		'decades',
		'centuries',
	];
	const conversionFactors = [60, 60, 24, 7, 4.34524, 12, 10, 10];

	let convertedValue = time;

	for (let i = 1; i < units.length; i++) {
		convertedValue /= conversionFactors[i - 1];
		if (convertedValue < 1) {
			return `About ${(convertedValue * conversionFactors[i - 1]).toPrecision(
				2
			)} ${units[i - 1]}`;
		}
	}
	if (convertedValue > 100000) {
		return 'Heat Death of the Universe';
	}
	return `About ${convertedValue.toPrecision(2)}  ${units[units.length - 1]}`;
}

const PasswordDisplay: React.FC<Props> = ({ passwordPoss, clockspeed }) => {
	let time: string = '';
	let timeN: number = 0;
	if (Number(passwordPoss)) {
		timeN = Number(passwordPoss) / clockspeed;
		if (timeN < 1) {
			time = 'less than a second';
		} else {
			time = convertTimeToSmallestUnit(timeN);
		}
	}
	return <h1 className='password'>{time || '\u00A0'}</h1>;
};

export default PasswordDisplay;
