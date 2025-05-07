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
}

export const Registration = ({ className, border = true, ...props }: Props) => {
	return (
		<Link
			className={clsx(
				styles.registration,
				{
					[styles.border]: border
				},
				className
			)}
			to="/registration"
			{...props}
		>
			<span className={styles.registration__title}>Регистрация</span>
			<SvgIcon className={styles.registration__icon} name="arrow" />
		</Link>
	);
};
