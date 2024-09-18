import './Select.scss'
import {useState} from "react";
import PropTypes from "prop-types";

const Select = ({selectName, options, onChange}) => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	
	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option); // Вызываем onChange с выбранной опцией
		}
	};
	
	return (
		<div className="select">
			<p className='select__title'>{selectName}</p>
			<div className={`select__header ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
				<span>{selectedOption}</span>
				<div className="select__arrow"></div>
			</div>
			{isOpen && (
				<div className="select__options">
					{options.map((option, index) => (
						<div
							key={index}
							className="select__option-item"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Select;

Select.propTypes = {
	selectName: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
}