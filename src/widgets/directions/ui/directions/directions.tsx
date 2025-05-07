import { DIRECTIONS } from '../../lib';

import { DirectionItem } from '../direction-item';

import styles from './directions.module.scss';

export const Directions = () => {
	return (
		<section id="directions" className={styles.directions}>
			<div className={styles.directions__background}></div>
			<div className={styles.container}>
				<div className={styles.directions__inner}>
					<h3 className={styles.directions__title}>НАПРАВЛЕНИЯ</h3>
					<div className={styles.directions__items}>
						{DIRECTIONS.map(({ id, ...props }) => (
							<DirectionItem
								className={styles.directions__item}
								key={id}
								{...props}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
