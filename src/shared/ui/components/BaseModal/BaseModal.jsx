import './BaseModal.scss'
import PropTypes from "prop-types";

const BaseModal = ({open, onCancel, buttonLogin, inputLogin, inputPassword, inputPasswordRepeat, buttonRegistration}) => {
	
	
	const handleBackgroundClick = (e) => {
		if (e.target.classList.contains('base-modal')) {
			onCancel();
		}
	};
	
	return (
		<div onClick={handleBackgroundClick} className={`base-modal ${open ? 'base-modal__open' : ''}`}>
			<div className="base-modal__box">
				{inputLogin}
				{inputPassword}
				{inputPasswordRepeat}
				{buttonRegistration}
				{buttonLogin}
				<div onClick={onCancel} className='base-modal__box__close-icon'>
					<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.7025 1.41L13.2326 0L7.40496 5.59L1.57735 0L0.107422 1.41L5.93503 7L0.107422 12.59L1.57735 14L7.40496 8.41L13.2326 14L14.7025 12.59L8.87489 7L14.7025 1.41Z"
							fill="#C4C4C4"/>
					</svg>
				
				</div>
			</div>
		
		</div>
	)
}

export default BaseModal;

BaseModal.propTypes = {
	open: PropTypes.bool.isRequired,
	onCancel: PropTypes.func.isRequired,
	buttonLogin: PropTypes.element.isRequired,
	inputLogin: PropTypes.element.isRequired,
	inputPasswordRepeat: PropTypes.element.isRequired,
	buttonRegistration: PropTypes.element.isRequired,
	inputPassword: PropTypes.element.isRequired,
	
}