import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './expert-item.module.scss';

interface Props {
	imageSrc?: string;
	title: string;
	description: string;
}

export const ExpertItem = ({ imageSrc, title, description }: Props) => {
	const [firstName, lastName] = title.split(' ');

	return (
		<div className={styles.expert}>
			{imageSrc ? (
				<div className={styles.expert__avatar}>
					<img className={styles.expert__image} src={imageSrc} alt={title} />
				</div>
			) : (
				<div
					className={clsx(
						styles.expert__avatar,
						styles['expert__avatar--empty']
					)}
				>
					<SvgIcon
						className={clsx(
							styles.expert__image,
							styles['expert__image--empty']
						)}
						name="expert"
					/>
				</div>
			)}
			<div className={styles.expert__info}>
				<h5 className={styles.expert__title}>
					{firstName} {lastName}
				</h5>
				<p className={styles.expert__description}>{description}</p>
			</div>
		</div>
	);
};
