/* eslint-disable react/prop-types */

// Import library;
import { useState, useEffect, useRef, useCallback } from 'react';
import { SvgIcon } from '@mui/material';

// Import styles;
import '../styles/elements/convert.css';

// Convert area to handle any type of file;
const Convert = (props) => {
	const { convert, setBackdrop } = props;

	// Set drop hover;
	const [hover, setHover] = useState(false);

	// Drag drop hover;
	const [isDragOver, setIsDragOver] = useState(false);

	// Convert ref;
	const convertAreaRef = useRef(null);

	// Choose input ref;
	const chooseInputRef = useRef(null);

	// Get file choose information;
	const getFileInfo = (files) => {
		// Create array to store name and data of file;
		const filesName = [];
		const filesBlob = [];

		// Assign name and data to array;
		for (let index = 0; index < files.length; index++) {
			filesName[index] = files[index].name;
			filesBlob[index] = new Blob([files[index]], {
				type: files[index].type,
			});
		}

		return { names: filesName, blob: filesBlob };
	};

	// Handle on drag;
	const onDragOver = useCallback((event) => {
		event.preventDefault();
		setIsDragOver(true);
	}, []);

	// Trigger when leave drag;
	const onDragLeave = useCallback((event) => {
		event.preventDefault();
		setIsDragOver(false);
	}, []);

	// Handle on drop;
	const onDrop = useCallback((event) => {
		event.preventDefault();
		setIsDragOver(false);

		// Get file drop info;
		getFileInfo(event.dataTransfer.files);
	}, []);

	// Show backdrop;
	useEffect(() => {
		if (convert) {
			setBackdrop(true);

			// Set size;
			convertAreaRef.current.style.width = '650px';
			convertAreaRef.current.style.height = '400px';

			// Wait 300ms then set size; (make it smooth);
			setTimeout(() => {
				convertAreaRef.current.style.width = '600px';
				convertAreaRef.current.style.height = '350px';
			}, 300);
		} else {
			// Set size;
			convertAreaRef.current.style.width = '650px';
			convertAreaRef.current.style.height = '400px';

			// Wait 300ms then set size; (make it smooth);
			setTimeout(() => {
				convertAreaRef.current.style.width = '0px';
				convertAreaRef.current.style.height = '0px';
			}, 300);
		}
	}, [convert, setBackdrop]);

	// Handle all choose file;
	const handleFileChoose = (event) => {
		// Get file choose info;
		getFileInfo(event.target.files);

		// Reset value;
		event.target.value = null;
	};

	// Return component;
	return (
		<div
			ref={convertAreaRef}
			className="absolute convert__area flex justify-center items-center"
			style={{
				opacity: `${convert ? 1 : 0}`,
			}}
		>
			<div
				className={
					'w-[580px] h-[330px] drop__area ' +
					'flex flex-col justify-center items-center'
				}
				style={{
					opacity: `${convert ? 1 : 0}`,
					borderRadius: '8px',
					borderColor: `${
						!hover && !isDragOver ? '#9d9595' : '#ffffff'
					}`,
				}}
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
				onClick={() => {
					chooseInputRef.current.click();
				}}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
			>
				<div
					style={{
						filter: `${
							!hover && !isDragOver ? 'none' : 'brightness(1.25)'
						}`,
						transition: 'all 0.3s ease',
						position: 'relative',
					}}
				>
					{/* Plus Icon */}
					<SvgIcon
						sx={{
							width: 50,
							height: 50,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							opacity: `${!isDragOver ? 1 : 0}`,
							transition: 'all 0.3s ease',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="800"
							height="800"
							viewBox="0 0 32 32"
						>
							<path
								fill="#c3c3c3"
								fillRule="evenodd"
								d="M28 12h-8V4a4 4 0 1 0-8 0v8H4a4 4 0 1 0 0 8h8v8a4 4 0 1 0 8 0v-8h8a4 4 0 1 0 0-8"
							/>
						</svg>
					</SvgIcon>

					{/* Arrow Icon */}
					<SvgIcon
						sx={{
							width: 50,
							height: 50,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							opacity: `${isDragOver ? 1 : 0}`,
							transition: 'all 0.3s ease',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlSpace="preserve"
							width="800"
							height="800"
							viewBox="0 0 512 512"
						>
							<path
								fill="#c3c3c3"
								d="M487.129 235.987c-16.613-16.438-43.417-16.294-59.85.328L298.323 366.669V42.328C298.323 18.966 279.374 0 256.007 0c-23.388 0-42.328 18.966-42.328 42.328v324.34L84.729 236.316c-16.438-16.622-43.242-16.766-59.864-.328-16.618 16.438-16.767 43.252-.33 59.875l201.37 203.563a42.304 42.304 0 0 0 60.193-.001l201.364-203.563c16.433-16.623 16.304-43.437-.333-59.875"
							/>
						</svg>
					</SvgIcon>
				</div>

				<h1
					className="mt-[50px]"
					style={{
						color: `${
							!hover && !isDragOver ? '#c3c3c3' : '#ffffff'
						}`,
						transition: 'all 0.3s ease',
					}}
				>
					DROP FILE HERE
				</h1>

				<input
					type="file"
					multiple
					ref={chooseInputRef}
					style={{ display: 'none' }}
					onChange={handleFileChoose}
				/>
			</div>
		</div>
	);
};

// Export component;
export default Convert;
