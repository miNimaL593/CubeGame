import './Button.scss'
import PropTypes from "prop-types";


const Button = ({ title, onClick, classTitle, inputValue, showInput, onInputChange }) => {
	
	return (
		<button  className={`button ${classTitle}`} onClick={onClick}>{
			title}
			{showInput && (
				<input
					type="number"
					min="1"
					max="6"
					value={inputValue}
					onChange={(e) => onInputChange(e.target.value)}
					className="input-field"
				
				/>
			)}
		</button>
	)
}

export default Button;

Button.propTypes = {
	onClick: PropTypes.func,
	classTitle: PropTypes.string,
	title: PropTypes.string,
	inputValue: PropTypes.any,
	onInputChange: PropTypes.func,
	showInput: PropTypes.bool,
}