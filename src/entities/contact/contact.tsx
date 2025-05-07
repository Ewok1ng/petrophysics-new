import { ReactNode } from 'react';
import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './contact.module.scss';

interface Props {
	variant?: 'dark' | 'light';
	className?: string;
	iconName: string;
	title: ReactNode;
	href: string;
}

export const Contact = ({
	variant = 'light',
	className,
	iconName,
	title,
	href
}: Props) => {
	return (
		<a
			href={href}
			className={clsx(
				styles.contact,
				{
					[styles['contact--light']]: variant === 'light',
					[styles['contact--dark']]: variant === 'dark'
				},
				className
			)}
		>
			<SvgIcon className={styles.contact__icon} name={iconName} />
			<span className={styles.contact__title}>{title}</span>
		</a>
	);
};
