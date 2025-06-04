import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './direction-item.module.scss';

interface Props {
	icon: string;
	title: string;
	className?: string;
}

export const DirectionItem = ({ icon, title, className }: Props) => {
	return (
		<div className={clsx(styles.direction, className)}>
			<SvgIcon className={styles.direction__icon} name={icon} />
			<p className={styles.direction__info}>{title}</p>
		</div>
	);
};
