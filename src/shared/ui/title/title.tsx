import clsx from 'clsx';

import styles from './title.module.scss';

interface Props {
	className?: string;
	title: string;
}

export const Title = ({ className, title }: Props) => {
	return (
		<h1 className={clsx(styles.title, className)}>
			{title}
			<div className={styles.title__shadows}>
				<div className={clsx(styles.title, styles['title--shadow'])}>
					{title}
				</div>
				<div className={clsx(styles.title, styles['title--shadow'])}>
					{title}
				</div>
				<div className={clsx(styles.title, styles['title--shadow'])}>
					{title}
				</div>
				<div className={clsx(styles.title, styles['title--shadow'])}>
					{title}
				</div>
			</div>
		</h1>
	);
};
