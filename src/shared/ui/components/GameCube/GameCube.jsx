import './GameCube.scss'
import Cube from "../Cube/Cube.jsx";
import PropTypes from "prop-types";


const GameCube = ({ dotCount, buttonEven, buttonOdd, buttonSmall, buttonBig, buttonNumber, selectBet, message, placeBet }) => {
	
	return (
		<div className='game-cube'>
			<div className='game-cube__container'>
				{dotCount < 1 ?
					<div className='game-cube__cell-top'>
						<span className='game-cube__cell-top__title'>Сделайте ставку</span>
					</div>
					:
					<div className='game-cube__cell-top'>
						<span className='game-cube__cell-top__title'>Результат броска кубика: {dotCount}</span>
						<span className='game-cube__cell-top__text'>{message}</span>
					</div>
				}
					<Cube dotCount={dotCount}/>
				<div className="game-cube__cell">
					<div className='game-cube__buttons-box'>
						{selectBet}
					</div>
				</div>
				<div className='game-cube__cell'>
					<p className='game-cube__title-box'>
						Варианты ставок
					</p>
					<div className='game-cube__buttons-box__choice'>
						{buttonEven}
						{buttonOdd}
						{buttonSmall}
						{buttonBig}
						{buttonNumber}
					</div>
					<div className='game-cube__buttons-box__place'>
						{placeBet}
					</div>
				
				</div>
			</div>
		</div>
	
	)
}

export default GameCube;

GameCube.propTypes = {
	dotCount: PropTypes.number.isRequired,
	buttonEven: PropTypes.func.isRequired,
	buttonOdd: PropTypes.func.isRequired,
	buttonSmall: PropTypes.func.isRequired,
	buttonNumber: PropTypes.func.isRequired,
	buttonBig: PropTypes.func.isRequired,
	selectBet: PropTypes.element.isRequired,
	message: PropTypes.func.isRequired,
	placeBet: PropTypes.func.isRequired,
	balance: PropTypes.func.isRequired,
}