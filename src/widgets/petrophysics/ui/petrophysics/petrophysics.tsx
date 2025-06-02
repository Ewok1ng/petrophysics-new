import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SvgIcon, Title } from '@shared/ui';

import { XXI } from '../xxi';

import styles from './petrophysics.module.scss';

interface Props {
	headerSlot: ReactNode;
}

export const Petrophysics = ({ headerSlot }: Props) => {
	const deadlineDate = new Date('08/01/2025').toLocaleDateString('RU-ru');

	return (
		<section className={styles.petrophysics}>
			<div className={styles.petrophysics__header}>{headerSlot}</div>
			<div className={styles.petrophysics__main}>
				<Title className={styles.petrophysics__title} title="Петрофизика" />
				<XXI className={styles.petrophysics__xxi} />
			</div>
			<div className={styles.petrophysics__footer}>
				<div
					className={clsx(
						styles.petrophysics__column,
						styles['petrophysics__column--main']
					)}
				>
					<h5 className={styles.petrophysics__date}>30.09.2025-02.10.2025</h5>
					<p className={styles.petrophysics__address}>
						«ИТ-парк» г. Казань, ул. Петербургская, д. 52
					</p>
				</div>
				<div
					className={clsx(
						styles.petrophysics__column,
						styles['petrophysics__column--secondary']
					)}
				>
					<div className={styles.petrophysics__deadline}>
						<p className={styles.petrophysics__deadline_date}>{deadlineDate}</p>
						<p className={styles.petrophysics__deadline_text}>
							крайний срок подачи тезисов
						</p>
					</div>
					<Link className={styles.petrophysics__link} to="#">
						<span className={styles.petrophysics__link_text}>
							Правила и условия публикации
						</span>
						<SvgIcon className={styles.petrophysics__link_icon} name="arrow" />
					</Link>
				</div>
			</div>
		</section>
	);
};
