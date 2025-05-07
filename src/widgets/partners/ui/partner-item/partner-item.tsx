import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './partner-item.module.scss';

interface Props {
	className?: string;
	name: string;
}

export const PartnerItem = ({ name, className }: Props) => {
	return (
		<div className={styles.partner}>
			<SvgIcon className={clsx(styles.partner__icon, className)} name={name} />
		</div>
	);
};
