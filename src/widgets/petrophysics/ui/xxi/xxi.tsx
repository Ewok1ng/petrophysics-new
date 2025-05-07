import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { BACKGROUNDS } from '../../lib';

import styles from './xxi.module.scss';

interface Props {
	className?: string;
}

export const XXI = ({ className }: Props) => {
	const [currentBg, setCurrentBg] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBg(prevIndex =>
				prevIndex === BACKGROUNDS.length - 1 ? 0 : prevIndex + 1
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={clsx(styles.xxi, className)}>
			<img
				className={clsx(
					styles.background__image,
					styles['background__image--mobile']
				)}
				src={BACKGROUNDS[0].imageSrc}
			/>
			<div className={styles.background}>
				{BACKGROUNDS.map(background => {
					return (
						<img
							className={clsx(styles.background__image, {
								[styles['background__image--active']]:
									background.id === currentBg
							})}
							key={background.id}
							src={background.imageSrc}
							style={{
								width: background.width,
								height: background.height,
								top: background.top,
								left: background.left
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
