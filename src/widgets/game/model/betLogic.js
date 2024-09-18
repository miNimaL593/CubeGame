const initialBalance = 100

export const makeBet = (balance, betAmount, betType, rolledNumber) => {
	let winnings = 0;
	const evenNumbers = [2, 4, 6];
	const oddNumbers = [1, 3, 5];
	
	if (betAmount > balance) {
		return { newBalance: balance, winnings: 0 }; 
	}
	
	const isSpecificNumber = !isNaN(Number(betType));
	
	if (isSpecificNumber) {
		if (rolledNumber === parseInt(betType, 10)) {
			winnings = betAmount * 3;
		}
	}
	
	
	switch (betType) {
		case "even":
			if (evenNumbers.includes(rolledNumber)) {
				winnings = betAmount * 2;
			}
			break;
		case "odd":
			if (oddNumbers.includes(rolledNumber)) {
				winnings = betAmount * 2;
			}
			break;
		case "1-3":
			if (rolledNumber >= 1 && rolledNumber <= 3) {
				winnings = betAmount * 2;
			}
			break;
		case "4-6":
			if (rolledNumber >= 4 && rolledNumber <= 6) {
				winnings = betAmount * 2;
			}
			break;
		default:
			break;
	}
	
	const newBalance = balance - betAmount + winnings;
	return { newBalance, winnings };
};

export const getInitialBalance = () => initialBalance;

export const rollDice = () => {
	return Math.floor(Math.random() * 6) + 1;
};
