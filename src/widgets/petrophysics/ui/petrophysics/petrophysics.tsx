import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon, Timer, Title } from '@shared/ui';

import { XXI } from '../xxi';

import styles from './petrophysics.module.scss';

interface Props {
	headerSlot: ReactNode;
}

export const Petrophysics = ({ headerSlot }: Props) => {
	return (
		<section className={styles.petrophysics}>
			<div className={styles.petrophysics__header}>{headerSlot}</div>
			<div className={styles.petrophysics__main}>
				<div className={styles.container}>
					<div className={styles.petrophysics__main_inner}>
						<Title className={styles.petrophysics__title} title="Петрофизика" />
						<XXI className={styles.petrophysics__xxi} />
					</div>
				</div>
			</div>
			<div className={styles.petrophysics__footer}>
				<div className={styles.petrophysics__column}>
					<h5 className={styles.petrophysics__date}>30.09.2025-02.10.2025</h5>
					<p className={styles.petrophysics__address}>
						«ИТ-парк» г. Казань, ул. Петербургская, д. 52
					</p>
				</div>
				<div className={styles.petrophysics__column}>
					<h5 className={styles.petrophysics__conference}>
						ДО НАЧАЛА КОНФЕРЕНЦИИ
					</h5>
					<Timer
						className={styles.petrophysics__timer}
						date={new Date('09-30-2025')}
					/>
				</div>
				<div className={styles.petrophysics__column}>
					<Link className={styles.petrophysics__programm} to="#">
						<span className={styles.petrophysics__programm_text}>
							ПРОГРАММА КОНФЕРЕНЦИИ
						</span>
						<SvgIcon
							className={styles.petrophysics__programm_icon}
							name="arrow"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};
