import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './industry.module.scss';

export const Industry = () => {
	return (
		<section className={styles.industry}>
			<div className={styles.industry__row}>
				<div className={styles.container}>
					<div className={styles.industry__row_inner}>
						<h3 className={styles.industry__title}>
							Меняем индустрию совместно
						</h3>
						<p className={styles.industry__description}>
							Приглашаем Вас принять участие в специализированной конференции по
							петрофизике, исследованиям керна, геомеханике, интерпретации
							данных в горизонтальных скважинах, сопровождению бурения и другим
							ключевым аспектам скважинной геофизики.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.industry__row}>
				<div className={styles.container}>
					<div
						className={clsx(
							styles.industry__row_inner,
							styles['industry__row_inner--content']
						)}
					>
						<div className={styles.industry__icons}>
							<SvgIcon
								className={clsx(
									styles.industry__icon,
									styles['industry__icon--kfu']
								)}
								name="industry-kfu"
							/>
						</div>

						<h4 className={styles.industry__subtitle}>
							Организатор конференции
						</h4>
					</div>
				</div>
				<div
					className={clsx(
						styles.industry__background,
						styles['industry__background--kfu']
					)}
				></div>
			</div>
			<div className={styles.industry__row}>
				<div className={styles.container}>
					<div
						className={clsx(
							styles.industry__row_inner,
							styles['industry__row_inner--content']
						)}
					>
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
						<h4 className={styles.industry__subtitle}>
							Соорганизаторы конференции
						</h4>
					</div>
				</div>
				<div
					className={clsx(
						styles.industry__background,
						styles['industry__background--agi']
					)}
				></div>
			</div>
		</section>
	);
};
