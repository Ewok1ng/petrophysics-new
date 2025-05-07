import clsx from 'clsx';

import { CONFERENCES } from '../../lib';
import { Conference } from '../conference';

import styles from './conferences.module.scss';

export const Conferences = () => {
	return (
		<section className={styles.conferences}>
			<div className={styles.container}>
				<div className={styles.conferences__inner}>
					<div
						className={clsx(
							styles.conferences__column,
							styles['conferences__column--info']
						)}
					>
						<h3 className={styles.conferences__title}>Ближайшие конференции</h3>
						<p className={styles.conferences__subtitle}>
							Приглашаем Вас принять участие в других научных и практических
							конференциях, проводимых казанским федеральным университетом в
							2025 году
						</p>
					</div>
					<div className={styles.conferences__column}>
						<div className={styles.conferences__items}>
							{CONFERENCES.map(({ id, ...props }) => (
								<Conference key={id} {...props} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
