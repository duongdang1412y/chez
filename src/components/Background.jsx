/* eslint-disable react/prop-types */

// Import styles;
import '../styles/elements/background.css';

// Background;
const Background = (props) => {
	const { defaultTheme } = props;

	// Return component;
	return (
		<div className="background">
			<div
				className="circle"
				style={{ backgroundColor: defaultTheme.palette.circle.default }}
			>
				<div
					className="circle__I"
					style={{ backgroundColor: defaultTheme.palette.circle.I }}
				>
					<div
						className="circle__II"
						style={{
							backgroundColor: defaultTheme.palette.circle.II,
						}}
					>
						<div
							className="circle__III"
							style={{
								backgroundColor:
									defaultTheme.palette.circle.III,
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export component;
export default Background;
