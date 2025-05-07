import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { SvgIcon } from '@shared/ui';

import styles from './input.module.scss';

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	id: string;
	iconName?: string;
}

export const Input = ({ id, iconName, ...props }: Props) => {
	return (
		<div className={styles.wrapper}>
			{iconName && (
				<label className={styles.label} htmlFor={id}>
					<SvgIcon className={styles.label__icon} name={iconName} />
				</label>
			)}
			<input className={styles.input} {...props} />
		</div>
	);
};
