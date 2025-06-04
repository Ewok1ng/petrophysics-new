import { Link } from 'react-router-dom';

import { SvgIcon } from '@shared/ui';

// eslint-disable-next-line import/no-internal-modules
import background from '@shared/assets/images/directions-new-2.svg';

import { DIRECTIONS } from '../../lib';

import { DirectionItem } from '../direction-item';

import styles from './directions.module.scss';

export const Directions = () => {
	return (
		<section id="directions" className={styles.directions}>
			<img className={styles.directions__background} src={background}></img>
			<div className={styles.directions__wrapper}>
				<h3 className={styles.directions__title}>НАПРАВЛЕНИЯ</h3>
				<div className={styles.directions__items}>
					{DIRECTIONS.map(({ id, ...props }) => (
						<DirectionItem
							className={styles.directions__item}
							key={id}
							{...props}
						/>
					))}
					<Link
						className={styles.link}
						to="https://geomodel.ru/petrophysicsxxi#themes"
						target="_blank"
					>
						<span className={styles.link__text}>Подать тезисы</span>
						<SvgIcon className={styles.link__icon} name="arrow" />
					</Link>
				</div>
			</div>
		</section>
	);
};
