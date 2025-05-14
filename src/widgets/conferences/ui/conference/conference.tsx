import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './conference.module.scss';

interface Props {
	className?: string;
	iconClassName?: string;
	iconName: string;
	title: string;
	link: string;
	description: string;
	date: string;
	city: string;
}

export const Conference = ({
	className,
	iconClassName,
	iconName,
	title,
	link,
	description,
	date,
	city
}: Props) => {
	return (
		<Link
			className={clsx(styles.conference, className)}
			to={link}
			target="_blank"
		>
			<SvgIcon className={clsx(styles.icon, iconClassName)} name={iconName} />
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.description}>{description}</p>
			<div className={styles.info}>
				<p className={styles.date}>{date}</p>
				<p className={styles.city}>г. {city}</p>
			</div>
		</Link>
	);
};
