import './Input.scss'
import PropTypes from "prop-types";

const Input = ({ placeholder, value, onChange, type, required }) => {
	
	return (
			<input
				required={required}
				className="input"
				placeholder={placeholder}
				value={value}        // Передаем значение из родительского компонента
				onChange={onChange}  // Передаем обработчик изменения
				type={type}
			/>
	)
}

export default Input;

Input.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	type: PropTypes.string,
	required: PropTypes.bool,
}