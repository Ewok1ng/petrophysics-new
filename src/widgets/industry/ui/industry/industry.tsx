import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

// eslint-disable-next-line boundaries/element-types
import { Registration } from '@widgets/registration';

import styles from './industry.module.scss';

export const Industry = () => {
	return (
		<section className={styles.industry}>
			<div className={styles.industry__info}>
				<h3 className={styles.industry__title}>Меняем индустрию совместно</h3>
				<div className={styles.industry__about}>
					<p className={styles.industry__description}>
						Приглашаем Вас принять участие в специализированной конференции по
						петрофизике, исследованиям керна, геомеханике, интерпретации данных
						в горизонтальных скважинах, сопровождению бурения и другим ключевым
						аспектам скважинной геофизики.
					</p>
					<Registration />
				</div>
			</div>
			<div className={styles.industry__items}>
				<div className={styles.industry__item}>
					<h4 className={styles.industry__subtitle}>Организатор конференции</h4>
					<div className={styles.industry__icons}>
						<SvgIcon
							className={clsx(
								styles.industry__icon,
								styles['industry__icon--kfu']
							)}
							name="industry-kfu"
						/>
					</div>
					<div
						className={clsx(
							styles.industry__item_bg,
							styles['industry__item_bg--kfu']
						)}
					></div>
				</div>
				<div className={styles.industry__item}>
					<h4 className={styles.industry__subtitle}>
						Соорганизаторы конференции
					</h4>
					<div className={styles.industry__icons}>
						<SvgIcon
							className={clsx(
								styles.industry__icon,
								styles['industry__icon--geomodel']
							)}
							name="industry-geomodel"
						/>
						<SvgIcon
							className={clsx(
								styles.industry__icon,
								styles['industry__icon--agi']
							)}
							name="industry-agi"
						/>
					</div>
					<div
						className={clsx(
							styles.industry__item_bg,
							styles['industry__item_bg--agi']
						)}
					></div>
				</div>
			</div>
		</section>
	);
};
