import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { SvgIcon } from '@shared/ui';

import styles from './registration.module.scss';

export const Registration = () => {
	const text = 'Подать тезисы';

	return (
		<Marquee>
			<Link
				className={styles.registration}
				to="https://geomodel.ru/petrophysicsxxi#themes"
				target="_blank"
			>
				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />

				<span className={styles.registration__title}>{text}</span>
				<SvgIcon className={styles.registration__icon} name="arrow" />
			</Link>
		</Marquee>
	);
};
