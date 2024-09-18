import PropTypes from "prop-types";

const Side = ({ dotCount }) => {
	
	const dots = Array.from({ length: dotCount }, (_, index) => index + 1);
	
	const sideClass = `side-${dotCount}`;
	
	return (
		<div className={`cube__side ${sideClass}`}>
			{dots.map(dot => (
				<div key={dot} className={`cube__dot`} />
			))}
		</div>
	);
};

export default Side;


Side.propTypes = {
	dotCount: PropTypes.number.isRequired,
}