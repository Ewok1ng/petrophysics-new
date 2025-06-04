import { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './timer.module.scss';

interface Props {
	className?: string;
	date: Date;
}

export const Timer = ({ className, date }: Props) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = date.getTime() - now;

			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0
				});
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, [date]);
	return (
		<div className={clsx(styles.timer, className)}>
			<span>{timeLeft.days} д</span>
			<span>•</span>
			<span>{timeLeft.hours} ч</span>
			<span>•</span>
			<span>{timeLeft.minutes} м</span>
		</div>
	);
};
