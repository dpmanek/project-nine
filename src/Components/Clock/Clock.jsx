import { useEffect, useState } from 'react';
const Clock = (props) => {
	const [countDown, newdiff] = useState();
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		console.log('This will run every second!');
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);

	useEffect(() => {
		console.log('render');
		const timerID = setInterval(() => {
			const now = new Date().getTime();
			const anniversary = new Date('September 09, 2023').getTime();
			newdiff(anniversary - now);
			Count();
		}, 1000);

		const Count = () => {
			const tDays = Math.floor(countDown / (24 * 60 * 60 * 1000));
			const tHours = Math.floor(
				(countDown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
			);
			const tMinutes = Math.floor((countDown % (60 * 60 * 1000)) / (60 * 1000));
			const tSeconds = Math.floor((countDown % (60 * 1000)) / 1000);
			setDays(tDays);
			setHours(tHours);
			setMinutes(tMinutes);
			setSeconds(tSeconds);
		};
		// Count();
		return () => {
			// Cleanup work goes in here
			clearInterval(timerID);
		};
	}, [countDown]);

	return (
		<div className="timer">
			<p className="Anniversary">
				<strong>{days}</strong> Days
				<strong> {hours}</strong> Hours
				<strong> {minutes}</strong> Minutes
				<strong> {seconds}</strong> Seconds to go
			</p>
		</div>
	);
};
export default Clock;
