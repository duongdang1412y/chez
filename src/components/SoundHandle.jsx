/* eslint-disable react/prop-types */

// Import library;
import { useState } from 'react';
import { SvgIcon } from '@mui/material';

// Import styles;
import '../styles/elements/soundhandle.css';

// Muted icon;
const Muted = () => {
	return (
		<SvgIcon sx={{ width: 20, height: 20 }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="800"
				height="800"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fill="#ffffff"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.47 8.47a.75.75 0 0 1 1.06 0L17 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L18.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L17 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L15.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06"
				/>
				<path
					fill="#ffffff"
					d="M3.681 8.164c-.621.788-.64 1.71-.678 3.552a13.778 13.778 0 0 0 0 .569c.038 1.842.057 2.763.678 3.551.113.144.28.315.42.431.763.636 1.771.636 3.788.636.72 0 1.081 0 1.425.093.071.019.142.041.211.066.336.121.637.33 1.238.746 2.374 1.645 3.56 2.467 4.557 2.11.191-.069.376-.168.541-.29.786-.58.91-1.863 1.024-4.331l-1.294 1.294a2.25 2.25 0 1 1-3.182-3.182L13.818 12l-1.409-1.409a2.25 2.25 0 1 1 3.182-3.182l1.294 1.294c-.115-2.468-.238-3.751-1.024-4.331a2.125 2.125 0 0 0-.54-.29c-.997-.357-2.184.465-4.558 2.11-.601.416-.902.625-1.238.746a2.7 2.7 0 0 1-.211.067c-.344.092-.704.092-1.425.092-2.017 0-3.025 0-3.789.636-.14.116-.306.287-.419.43"
				/>
			</svg>
		</SvgIcon>
	);
};

// Volume loud icon;
const Volume = () => {
	return (
		<SvgIcon sx={{ width: 20, height: 20 }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="800"
				height="800"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fill="#ffffff"
					d="M2.003 11.716c.037-1.843.056-2.764.668-3.552.112-.144.276-.315.413-.431.752-.636 1.746-.636 3.733-.636.71 0 1.065 0 1.403-.092.07-.02.14-.042.209-.067.33-.121.627-.33 1.22-.746 2.338-1.645 3.508-2.467 4.489-2.11.188.069.37.168.533.29.848.635.913 2.115 1.042 5.073.048 1.096.08 2.034.08 2.555 0 .521-.032 1.46-.08 2.555-.13 2.958-.194 4.438-1.042 5.073-.163.122-.345.221-.533.29-.982.357-2.15-.465-4.49-2.11-.592-.416-.889-.625-1.22-.746a2.61 2.61 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092-1.987 0-2.98 0-3.733-.636a3.145 3.145 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14.06 14.06 0 0 1 0-.57"
				/>
				<path
					fill="#ffffff"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471.53-.47.002.002.003.004.007.009a2.572 2.572 0 0 1 .079.112c.047.071.111.173.186.305.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12c0 2.15-.36 3.71-.736 4.75-.187.52-.377.907-.526 1.172a4.655 4.655 0 0 1-.265.417l-.007.009-.003.003-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094.77.77 0 0 1-.09-1.035l.03-.041c.026-.04.07-.11.125-.207a6.28 6.28 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222 0-1.97-.33-3.35-.644-4.222a6.28 6.28 0 0 0-.422-.942 3.152 3.152 0 0 0-.157-.253M17.757 8.416c.333-.197.753-.07.938.286l-.603.357.603-.357.001.002.002.003.003.007.01.018.024.053c.018.042.042.099.07.17.053.145.12.35.185.62.13.54.252 1.337.252 2.425 0 1.089-.122 1.886-.252 2.426-.065.27-.132.475-.186.619a3.04 3.04 0 0 1-.094.223l-.009.018-.003.007-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286-.33-.196-.45-.638-.272-.991l.004-.01.035-.085c.032-.086.08-.23.13-.438.1-.416.208-1.09.208-2.06 0-.971-.108-1.645-.208-2.06a3.757 3.757 0 0 0-.165-.524l-.004-.01c-.179-.354-.058-.795.272-.991"
				/>
			</svg>
		</SvgIcon>
	);
};

// Enable or disable sounds when user click;
const SoundHandle = (props) => {
	const { defaultTheme } = props;

	// Set volume state;
	const [volume, setVolume] = useState(
		localStorage.getItem('volume') === null
			? true
			: localStorage.getItem('volume')
	);

	// Return component;
	return (
		<div
			// eslint-disable-next-line react/no-unknown-property
			sound-theme={defaultTheme.palette.mode}
			className="flex justify-center items-center sound__handle"
			style={{
				backgroundColor: defaultTheme.palette.sound_handle.default,
			}}
			onClick={() => {
				localStorage.setItem('volume', !volume);
				setVolume(!volume);
			}}
		>
			{/* Render icon */}
			{localStorage.getItem('volume') === 'true' ? <Volume /> : <Muted />}
		</div>
	);
};

// Export component;
export default SoundHandle;
