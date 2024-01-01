/* eslint-disable no-mixed-spaces-and-tabs */

// Import library;
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserView, MobileView } from 'react-device-detect';

// Import components;
import ThemeWrapper from './components/ThemeWrapper.jsx';
import Card from './components/Card.jsx';
import SoundHandle from './components/SoundHandle.jsx';
import Background from './components/Background.jsx';
import Convert from './components/Convert.jsx';

// Import styles;
import './styles/main.css';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
	// Set theme state;
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') === null ||
			(localStorage.getItem('theme') !== 'light' &&
				localStorage.getItem('theme') !== 'dark')
			? 'dark'
			: localStorage.getItem('theme')
	);

	// Set convert state;
	const [convert, showConvert] = useState(false);

	// Set backdrop state;
	const [backdrop, setBackdrop] = useState(false);

	// Create default theme;
	const defaultTheme = createTheme({
		palette: {
			mode: theme,
			...(theme === 'dark'
				? {
						// Custom palette values for dark mode
						background: {
							default: '#282c34',
						},
						circle: {
							default: '#343945',
							I: '#343c4f',
							II: '#414c69',
							III: '#37415f',
						},
						sound_handle: {
							default: '#4a4e69',
						},
				  }
				: {
						// Custom palette values for light mode
						background: {
							default: '#ffffff',
						},
						circle: {
							default: '#ffffff',
							I: '#ffffff',
							II: '#ffffff',
							III: '#ffffff',
						},
						sound_handle: {
							default: '#717b85',
						},
				  }),
		},
	});

	return (
		<Fragment>
			{/* For PC, laptop */}
			<BrowserView>
				<ThemeWrapper
					defaultTheme={defaultTheme}
					theme={theme}
					setTheme={setTheme}
				>
					<Background defaultTheme={defaultTheme} />
					<Container
						sx={{
							marginTop: '50px',
							marginBottom: '50px',
							position: 'relative',
						}}
					>
						<Card
							defaultTheme={defaultTheme}
							convert={convert}
							showConvert={showConvert}
						/>
						<Convert
							defaultTheme={defaultTheme}
							convert={convert}
							setBackdrop={setBackdrop}
						/>
					</Container>
					<div
						className="w-full h-full absolute top-0 left-0"
						style={{
							display: `${backdrop ? 'flex' : 'none'}`,
							backdropFilter: 'brightness(0.75)',
							zIndex: 0,
							cursor: 'pointer',
						}}
						onClick={() => {
							// Hide convert area and backdrop;
							if (convert) {
								showConvert(false);
								setBackdrop(false);
							}
						}}
					></div>
					<SoundHandle defaultTheme={defaultTheme} />
				</ThemeWrapper>
			</BrowserView>

			{/* For mobile */}
			<MobileView>
				<h1>Mobile coming soon</h1>
			</MobileView>
		</Fragment>
	);
};

// Entry point;
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
