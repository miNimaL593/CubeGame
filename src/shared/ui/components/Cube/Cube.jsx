import './Cube.scss';
import Side from "../SideCube/SideCube.jsx";
import PropTypes from "prop-types";



const Cube = ({dotCount}) => {
	
	return (
		<div className="cube">
			<div className="cube__container">
				<Side dotCount={dotCount} />
			</div>
		</div>
	);
};

export default Cube;

Cube.propTypes = {
	dotCount: PropTypes.number.isRequired,
}