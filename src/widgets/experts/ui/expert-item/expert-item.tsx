import styles from './expert-item.module.scss';

interface Props {
	imageSrc?: string;
	title: string;
	description: string;
}

export const ExpertItem = ({ imageSrc, title, description }: Props) => {
	return (
		<div className={styles.expert}>
			<div className={styles.expert__avatar}>
				{imageSrc && (
					<img className={styles.expert__image} src={imageSrc} alt={title} />
				)}
			</div>
			<div className={styles.expert__info}>
				<h5 className={styles.expert__title}>{title}</h5>
				<p className={styles.expert__description}>{description}</p>
			</div>
		</div>
	);
};
