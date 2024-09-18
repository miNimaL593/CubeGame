import './Header.scss'
import PropTypes from "prop-types";
import {useBalanceStore} from "../../../models/store/index.js";



const Header = ({ openLoginModalSlot, openRegistrationModal, isLoggedIn }) => {
	
	const { balance } = useBalanceStore()
	
	return (
		<div className="header">
			<div className="header__title-box">
				Test Game
			</div>
			{isLoggedIn ? <div className="">
				<div className="header__balance-box">
					{balance} (TDN)
				</div>
			</div> : <div className="header__buttons-box">
				{openLoginModalSlot}
				{openRegistrationModal}
			</div>}
		</div>
	)
}

export default Header;

Header.propTypes = {
	openLoginModalSlot: PropTypes.func,
	openRegistrationModal: PropTypes.func,
	isLoggedIn: PropTypes.bool,
}
