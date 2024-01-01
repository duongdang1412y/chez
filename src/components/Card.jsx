/* eslint-disable react/prop-types */

// Import library;
import { useMemo } from 'react';
import { Tilt } from 'react-tilt';
import { GlowCapture, Glow } from '@codaworks/react-glow';

// Import styles;
import '../styles/elements/card.css';

// Users are able to select the type of conversion from the card components;
const Card = (props) => {
	const { defaultTheme, convert, showConvert } = props;

	// Hash tag label;
	const cardTag = useMemo(() => {
		return {
			images: ['#jpg', '#png', '...'],
			videos: ['#mp4', '#avi', '...'],
			audios: ['#mp3', '#wav', '...'],
			documents: ['#pdf', '#docx', '...'],
		};
	}, []);

	// Default tilt options;
	const tiltOptions = {
		reverse: false, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		speed: 1000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
	};

	// Return component;
	return (
		<div className="grid grid-rows-2">
			{/* Up side */}
			<div className="flex justify-center items-center mb-[30px]">
				{/* Images */}
				<Tilt
					options={tiltOptions}
					style={{ width: 200, height: 250, marginRight: 30 }}
				>
					<GlowCapture>
						<Glow color="#d4af37" style={{ borderRadius: 10 }}>
							<div
								className={
									'w-[200px] h-[250px] flex justify-center items-center ' +
									'flex-col rounded-[10px] cursor-pointer card ' +
									'glow:text-glow/30 glow:bg-[#e2e2e230]'
								}
								style={{
									border: `2px solid ${defaultTheme.palette.divider}`,
								}}
								onMouseEnter={() => {
									const glowMask_I =
										document.getElementsByClassName(
											'glow-mask'
										)[0];
									glowMask_I.style.display = null;
								}}
								onMouseLeave={() => {
									const glowMask_I =
										document.getElementsByClassName(
											'glow-mask'
										)[0];
									glowMask_I.style.display = 'none';
								}}
								onClick={() => {
									// Show convert area;
									if (!convert) {
										showConvert(true);
									}
								}}
							>
								<div
									className="flex justify-center items-center"
									style={{ height: '50%' }}
								>
									<img
										className="w-[30%] pointer-events-none"
										src={`${
											import.meta.env.VITE_RESOURCE_HOST
										}/BZzu5FK.png`}
									/>
								</div>
								<div
									className="flex flex-col justify-center items-center"
									style={{ width: '100%', height: '50%' }}
								>
									<div className="w-full h-[50%] p-[10px]">
										<h1 className="text-sm font-bold">
											IMAGES
										</h1>
										<p className="text-xs leading-tight">
											For a conversion of various image
											formats, click here.
										</p>
									</div>
									<div className="w-full h-[50%] flex items-center">
										{[0, 1, 2].map((index) => (
											<div
												key={index}
												className="text-xs ml-[10px] px-[10px] py-[2px]"
												style={{
													borderRadius: 10,
													border: '2px solid rgba(255, 255, 255, 0.12)',
												}}
											>
												{`${cardTag.images[index]}`}
											</div>
										))}
									</div>
								</div>
							</div>
						</Glow>
					</GlowCapture>
				</Tilt>

				{/* Videos */}
				<Tilt
					options={tiltOptions}
					style={{ width: 200, height: 250, marginLeft: 30 }}
				>
					<GlowCapture>
						<Glow color="#d4af37" style={{ borderRadius: 10 }}>
							<div
								className={
									'w-[200px] h-[250px] flex justify-center items-center ' +
									'flex-col rounded-[10px] cursor-pointer card ' +
									'glow:text-glow/30 glow:bg-[#e2e2e230]'
								}
								style={{
									border: `2px solid ${defaultTheme.palette.divider}`,
								}}
								onMouseEnter={() => {
									const glowMask_II =
										document.getElementsByClassName(
											'glow-mask'
										)[1];
									glowMask_II.style.display = null;
								}}
								onMouseLeave={() => {
									const glowMask_II =
										document.getElementsByClassName(
											'glow-mask'
										)[1];
									glowMask_II.style.display = 'none';
								}}
								onClick={() => {
									// Show convert area;
									if (!convert) {
										showConvert(true);
									}
								}}
							>
								<div
									className="flex justify-center items-center"
									style={{ height: '50%' }}
								>
									<img
										className="w-[30%] pointer-events-none"
										src={`${
											import.meta.env.VITE_RESOURCE_HOST
										}/WZmvH3x.png`}
									/>
								</div>
								<div
									className="flex flex-col justify-center items-center"
									style={{ width: '100%', height: '50%' }}
								>
									<div className="w-full h-[50%] p-[10px]">
										<h1 className="text-sm font-bold">
											VIDEOS
										</h1>
										<p className="text-xs leading-tight">
											To convert between different video
											formats, here.
										</p>
									</div>
									<div className="w-full h-[50%] flex items-center">
										{[0, 1, 2].map((index) => (
											<div
												key={index}
												className="text-xs ml-[10px] px-[10px] py-[2px]"
												style={{
													borderRadius: 10,
													border: '2px solid rgba(255, 255, 255, 0.12)',
												}}
											>
												{`${cardTag.videos[index]}`}
											</div>
										))}
									</div>
								</div>
							</div>
						</Glow>
					</GlowCapture>
				</Tilt>
			</div>

			{/* Down side */}
			<div className="flex justify-center items-center mt-[30px]">
				{/* Audios */}
				<Tilt
					options={tiltOptions}
					style={{ width: 200, height: 250, marginRight: 30 }}
				>
					<GlowCapture>
						<Glow color="#d4af37" style={{ borderRadius: 10 }}>
							<div
								className={
									'w-[200px] h-[250px] flex justify-center items-center ' +
									'flex-col rounded-[10px] cursor-pointer card ' +
									'glow:text-glow/30 glow:bg-[#e2e2e230]'
								}
								style={{
									border: `2px solid ${defaultTheme.palette.divider}`,
								}}
								onMouseEnter={() => {
									const glowMask_III =
										document.getElementsByClassName(
											'glow-mask'
										)[2];
									glowMask_III.style.display = null;
								}}
								onMouseLeave={() => {
									const glowMask_III =
										document.getElementsByClassName(
											'glow-mask'
										)[2];
									glowMask_III.style.display = 'none';
								}}
								onClick={() => {
									// Show convert area;
									if (!convert) {
										showConvert(true);
									}
								}}
							>
								<div
									className="flex justify-center items-center"
									style={{ height: '50%' }}
								>
									<img
										className="w-[30%] pointer-events-none"
										src={`${
											import.meta.env.VITE_RESOURCE_HOST
										}/53iqG7t.png`}
									/>
								</div>
								<div
									className="flex flex-col justify-center items-center"
									style={{ width: '100%', height: '50%' }}
								>
									<div className="w-full h-[50%] p-[10px]">
										<h1 className="text-sm font-bold">
											AUDIOS
										</h1>
										<p className="text-xs leading-tight">
											Click here to convert between
											different audio formats.
										</p>
									</div>
									<div className="w-full h-[50%] flex items-center">
										{[0, 1, 2].map((index) => (
											<div
												key={index}
												className="text-xs ml-[10px] px-[10px] py-[2px]"
												style={{
													borderRadius: 10,
													border: '2px solid rgba(255, 255, 255, 0.12)',
												}}
											>
												{`${cardTag.audios[index]}`}
											</div>
										))}
									</div>
								</div>
							</div>
						</Glow>
					</GlowCapture>
				</Tilt>

				{/* Documents */}
				<Tilt
					options={tiltOptions}
					style={{ width: 200, height: 250, marginLeft: 30 }}
				>
					<GlowCapture>
						<Glow color="#d4af37" style={{ borderRadius: 10 }}>
							<div
								className={
									'w-[200px] h-[250px] flex justify-center items-center ' +
									'flex-col rounded-[10px] cursor-pointer card ' +
									'glow:text-glow/30 glow:bg-[#e2e2e230]'
								}
								style={{
									border: `2px solid ${defaultTheme.palette.divider}`,
								}}
								onMouseEnter={() => {
									const glowMask_IV =
										document.getElementsByClassName(
											'glow-mask'
										)[3];
									glowMask_IV.style.display = null;
								}}
								onMouseLeave={() => {
									const glowMask_IV =
										document.getElementsByClassName(
											'glow-mask'
										)[3];
									glowMask_IV.style.display = 'none';
								}}
								onClick={() => {
									// Show convert area;
									if (!convert) {
										showConvert(true);
									}
								}}
							>
								<div
									className="flex justify-center items-center"
									style={{ height: '50%' }}
								>
									<img
										className="w-[30%] pointer-events-none"
										src={`${
											import.meta.env.VITE_RESOURCE_HOST
										}/OtlUg2Z.png`}
									/>
								</div>
								<div
									className="flex flex-col justify-center items-center"
									style={{ width: '100%', height: '50%' }}
								>
									<div className="w-full h-[50%] p-[10px]">
										<h1 className="text-sm font-bold">
											DOCUMENTS
										</h1>
										<p className="text-xs leading-tight">
											To convert between document formats,
											go here.
										</p>
									</div>
									<div className="w-full h-[50%] flex items-center">
										{[0, 1, 2].map((index) => (
											<div
												key={index}
												className="text-xs ml-[10px] px-[10px] py-[2px]"
												style={{
													borderRadius: 10,
													border: '2px solid rgba(255, 255, 255, 0.12)',
												}}
											>
												{`${cardTag.documents[index]}`}
											</div>
										))}
									</div>
								</div>
							</div>
						</Glow>
					</GlowCapture>
				</Tilt>
			</div>
		</div>
	);
};

// Export component;
export default Card;
