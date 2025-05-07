import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './radio.module.scss';

interface Props
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'type'
	> {
	label: string;
}

export const Radio = ({ label, ...props }: Props) => {
	return (
		<div className={styles.radio}>
			<input className={styles.radio__input} {...props} type="radio" />
			<label htmlFor={props.id} className={styles.radio__label}>
				{label}
			</label>
		</div>
	);
};
