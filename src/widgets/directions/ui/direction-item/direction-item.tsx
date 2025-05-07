import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './direction-item.module.scss';

interface Props {
	icon: string;
	title: string;
	left: string;
	bottom: string;
	maxWidth: string;
	className?: string;
}

export const DirectionItem = ({
	icon,
	title,
	left,
	bottom,
	maxWidth,
	className
}: Props) => {
	return (
		<div
			className={clsx(styles.direction, className)}
			style={{
				left,
				bottom,
				maxWidth
			}}
		>
			<SvgIcon className={styles.direction__icon} name={icon} />
			<p className={styles.direction__info}>{title}</p>
		</div>
	);
};
