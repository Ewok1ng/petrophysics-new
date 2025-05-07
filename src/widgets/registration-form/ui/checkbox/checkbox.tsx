import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './checkbox.module.scss';

interface Props
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'type'
	> {
	label: string;
	className?: string;
}

export const Checkbox = ({ label, className, ...props }: Props) => {
	return (
		<div className={clsx(styles.checkbox, className)}>
			<input
				id={props.id}
				className={styles.checkbox__input}
				{...props}
				type="checkbox"
			/>
			<label htmlFor={props.id} className={styles.checkbox__label}>
				{label}
			</label>
		</div>
	);
};
