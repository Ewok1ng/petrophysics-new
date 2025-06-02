import clsx from 'clsx';

import { CONFERENCES } from '../../lib';
import { Conference } from '../conference';

import styles from './conferences.module.scss';

export const Conferences = () => {
	return (
		<section className={styles.conferences}>
			<div
				className={clsx(
					styles.conferences__column,
					styles['conferences__column--info']
				)}
			>
				<h3 className={styles.conferences__title}>Ближайшие конференции</h3>
				<p className={styles.conferences__subtitle}>
					Приглашаем Вас принять участие в других научных и практических
					конференциях, проводимых казанским федеральным университетом
				</p>
			</div>
			<div className={styles.conferences__column}>
				<div className={styles.conferences__items}>
					{CONFERENCES.map(({ id, ...props }) => (
						<Conference
							key={id}
							className={styles.conferences__item}
							{...props}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
