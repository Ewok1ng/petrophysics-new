/* eslint-disable import/no-internal-modules */
import expert from '@shared/assets/images/expert.png';

import { EXPERTS } from '../../lib';
import { ExpertItem } from '../expert-item';

import styles from './experts.module.scss';

export const Experts = () => {
	return (
		<section className={styles.experts}>
			<div className={styles.container}>
				<div className={styles.experts__inner}>
					<div className={styles.experts__main}>
						<h4 className={styles.experts__title}>ПРЕДСЕДАТЕЛЬ</h4>
						<div className={styles.expert}>
							<div className={styles.expert__avatar}>
								<img
									className={styles.expert__image}
									src={expert}
									alt="Нургалиев Данис Карлович"
								/>
							</div>
							<h5 className={styles.expert__title}>Нургалиев Данис Карлович</h5>
							<div className={styles.expert__info}>
								Проректор по направлениям нефтегазовых технологий,
								природопользования и наук о Земле Казанского
								(приволжского)федерального университета
							</div>
							<div className={styles.expert__description}>
								<p>
									Сегодня большинство фундаментальных и прикладных задач в любых
									отраслях решаются с использованием современных достижений
									физики, химии, математики и информационных технологий. Не
									являются исключением Науки о Земле и нефтегазовые технологии,
									где все новейшие разработки применяются наиболее оперативно!
									Это открывает новые перспективы повышения эффективности на
									всех этапах нефтегазовых исследований и разработок.
								</p>
								<p>
									Конференция «Петрофизика XXI» за годы ее проведения стала
									площадкой обмена опыта и знаниями в области изучения керна,
									петрофизических и геомеханических свойств, интерпретации
									данных в горизонтальных стволах и другим актуальным темам
									скважинной геофизики. Мы приглашаем на нашу конференцию всех,
									кого интересуют проблемы нефтегазовой геологии, разработки и
									бурения месторождений. Каждый участник конференции – геолог,
									геофизик, геохимик, разработчик, специалист по моделированию
									резервуаров откроет для себя новые инструменты, приобретет
									новые идеи, получит импульс для дальнейшего развития.
								</p>
								<p>До встречи в Казани!</p>
							</div>
						</div>
					</div>
					<div className={styles.experts__experts}>
						<h4 className={styles.experts__title}>ЭКСПЕРТЫ:</h4>
						<div className={styles.experts__list}>
							{EXPERTS.map(({ id, ...props }) => (
								<ExpertItem key={id} {...props} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
