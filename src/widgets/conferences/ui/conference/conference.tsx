import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './conference.module.scss';

interface Props {
	className?: string;
	href: string;
	imageSrc: string;
	alt?: string;
}

export const Conference = ({ className, href, imageSrc, alt }: Props) => {
	return (
		<Link
			className={clsx(styles.conference, className)}
			to={href}
			target="_blank"
		>
			<img className={styles.conference__image} src={imageSrc} alt={alt} />
		</Link>
	);
};
