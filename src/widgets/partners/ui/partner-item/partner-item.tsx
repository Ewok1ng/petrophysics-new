import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './partner-item.module.scss';

interface Props {
	className?: string;
	iconClassName?: string;
	name: string;
}

export const PartnerItem = ({ name, className, iconClassName }: Props) => {
	return (
		<div className={clsx(styles.partner, className)}>
			<SvgIcon
				className={clsx(styles.partner__icon, iconClassName)}
				name={name}
			/>
		</div>
	);
};
