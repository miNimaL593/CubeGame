import GameCube from "../../../shared/ui/components/GameCube/GameCube.jsx";
import Button from "../../../shared/ui/components/Button/Button.jsx";
import Select from "../../../shared/ui/components/Select/Select.jsx";
import {useEffect, useState} from "react";
import {makeBet, rollDice} from "../model/betLogic.js";
import {useAuthStore, useBalanceStore} from "../../../shared/models/store/index.js";

const optionsBet = [
	'1.00', '2.00', '3.00', '4.00', '10.00', '25.00', '60.00', '100.00'
];
const GameCubeBlock = () => {
	
	const { balance, placeBet, addWinnings, setBalance } = useBalanceStore();
	const { user } = useAuthStore();
	const [dotCount, setDotCount] = useState(0);
	const [betAmount, setBetAmount] = useState(1);
	const [betType, setBetType] = useState(null);
	const [message, setMessage] = useState("");


	useEffect(() => {
		if (user) {
			setBalance(user);
		}
	}, [user, setBalance]);
	
	const handlePlaceBet = () => {
		if (!betType) {
			setMessage("Сначала выберите тип ставки.");
			return;
		}
		
		if (betAmount > balance) {
			setMessage("Недостаточно средств для ставки.");
			return;
		}
		
		const rolledNumber = rollDice();
		setDotCount(rolledNumber);
		
		const { winnings } = makeBet(balance, betAmount, betType, rolledNumber);
		
		placeBet(betAmount);
		addWinnings(winnings);
		
		const updatedBalance = balance - betAmount + winnings;
		localStorage.setItem(`balance_${user.id}`, updatedBalance);
		
		setMessage(winnings > 0 ? `Вы выиграли ${winnings} TND!` : `Повезет в следующий раз!`);
	};
	
	
	
	const handleBetType = (type) => {
		setBetType(type);
	};
	
	
	const handleBetChange = (option) => {
		setBetAmount(Number(option));
	};
	
	const getButtonClass = (type) => betType === type ? 'button-default active-choice ' : 'button-default ';
	const getInputClass = (type) => betType > 0 ? 'button-default active-choice ' : 'button-default ';
	
	
	const handleInputChange = (value) => {
		const numValue = value === '' ? '' : Number(value);
		if (numValue === '' || (numValue >= 1 && numValue <= 6)) {
			setBetType(numValue);
		}
	};
	
	return (
		<GameCube
			dotCount={dotCount}
			balance={balance}
			message={message}
			buttonEven={<Button classTitle={getButtonClass("even")} title="Четное" onClick={() => handleBetType("even")} />}
			buttonOdd={<Button classTitle={getButtonClass("odd")} title="Нечетное" onClick={() => handleBetType("odd")} />}
			buttonSmall={<Button classTitle={getButtonClass("1-3")} title="1-3" onClick={() => handleBetType("1-3")} />}
			buttonBig={<Button classTitle={getButtonClass("4-6")} title="4-6" onClick={() => handleBetType("4-6")} />}
			buttonNumber={<Button disable={true} classTitle={getInputClass("specific") + 'button-input'} title="Конкретное число" showInput={true} inputValue={betType} onInputChange={handleInputChange} />}
			selectBet={<Select options={optionsBet} selectName="Размер ставки" onChange={handleBetChange} />}
			placeBet={<Button
				classTitle="button-green"
				disabled={true}
				title="Сделать ставку"
				onClick={handlePlaceBet}
			/>}
		/>
	)
}

export default GameCubeBlock;

