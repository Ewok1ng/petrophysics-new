import { useRef, useState } from 'react';
import clsx from 'clsx';

import { EXPERTS, MAIN_EXPERTS } from '../../lib';
import { ExpertItem } from '../expert-item';

import styles from './experts.module.scss';

export const Experts = () => {
	const scrollTopRef = useRef<number>(0);

	const [isExpertsHidden, setExpertsHidden] = useState<boolean>(true);

	const toggleButton = () => {
		if (isExpertsHidden) {
			scrollTopRef.current = document.body.scrollTop;
		} else {
			document.body.scrollTop = scrollTopRef.current;
		}

		setExpertsHidden(prev => !prev);
	};

	return (
		<section
			className={clsx(styles.experts, {
				[styles['experts--hidden']]: isExpertsHidden
			})}
		>
			<div className={styles.experts__main}>
				<h4 className={styles.experts__title}>ПРЕДСЕДАТЕЛИ</h4>
				<div
					className={clsx(styles.experts__list, styles['experts__list--main'])}
				>
					{MAIN_EXPERTS.map(({ id, ...props }) => (
						<ExpertItem key={id} {...props} />
					))}
				</div>
			</div>
			<div className={styles.experts__experts}>
				<h4 className={styles.experts__title}>ЭКСПЕРТЫ:</h4>
				<div className={styles.experts__list}>
					{EXPERTS.map(({ id, ...props }) => (
						<ExpertItem key={id} {...props} />
					))}
				</div>
			</div>
			<div className={styles.controls}>
				<button className={styles.controls__button} onClick={toggleButton}>
					{isExpertsHidden ? 'Показать еще' : 'Скрыть'}
				</button>
			</div>
		</section>
	);
};
