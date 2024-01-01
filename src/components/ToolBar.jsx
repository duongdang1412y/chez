/* eslint-disable react/prop-types */

// Import library;
import { Toolbar } from '@mui/material';

// Tool bar on top component;
const ToolBar = (props) => {
	const { defaultTheme, children } = props;

	// Return component;
	return (
		<Toolbar
			sx={{
				width: '100vw',
				borderBottom: `2px solid ${defaultTheme.palette.divider}`,
				boxShadow: `0px 2px 4px 0px ${
					defaultTheme.palette.mode === 'dark'
						? 'rgba(0, 0, 0, 0.2)'
						: 'rgba(153, 128, 128, 0.2)'
				} `,
			}}
		>
			{children}
		</Toolbar>
	);
};

// Export component;
export default ToolBar;
