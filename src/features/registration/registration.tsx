import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { SvgIcon } from '@shared/ui';

import styles from './registration.module.scss';

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	className?: string;
	border?: boolean;
	text?: string;
}

export const Registration = ({
	className,
	border = true,
	text = 'Регистрация',
	...props
}: Props) => {
	return (
		<Link
			className={clsx(
				styles.registration,
				{
					[styles.border]: border
				},
				className
			)}
			to="https://geomodel.ru/petrophysicsxxi#themes"
			target="_blank"
			{...props}
		>
			<span className={styles.registration__title}>{text}</span>
			<SvgIcon className={styles.registration__icon} name="arrow" />
		</Link>
	);
};
