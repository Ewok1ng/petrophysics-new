import clsx from 'clsx';

import { SvgIcon } from '../svg-icon';

import styles from './logo.module.scss';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	return <SvgIcon className={clsx(styles.logo, className)} name="logo" />;
};
