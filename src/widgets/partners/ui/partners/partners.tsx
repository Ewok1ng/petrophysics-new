import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import { PARTNERS } from '../../lib';
import { Litosphere } from '../litosphere';
import { Lukoil } from '../lukoil';
import { PartnerItem } from '../partner-item';
import { Sakhalinenergy } from '../sakhalinenergy';

import styles from './partners.module.scss';

export const Partners = () => {
	const scrollTopRef = useRef<number>(0);

	const [isPartnersHidden, setIsPartnersHidden] = useState<boolean>(true);

	const toggleButton = () => {
		if (isPartnersHidden) {
			scrollTopRef.current = document.body.scrollTop;
		} else {
			document.body.scrollTop = scrollTopRef.current;
		}

		setIsPartnersHidden(prev => !prev);
	};

	return (
		<section className={styles.partners}>
			<div className={styles.partners__inner}>
				<div
					className={clsx(styles.partners__items, {
						[styles['partners__items--hidden']]: isPartnersHidden
					})}
				>
					<h4 className={clsx(styles.partners__title, styles.partner)}>
						Участники конференции
					</h4>
					{PARTNERS.map(partner => {
						if (partner.id === 1) {
							return (
								<Sakhalinenergy key={partner.id} className={styles.partner} />
							);
						}

						if (partner.id === 41) {
							return <Litosphere key={partner.id} className={styles.partner} />;
						}

						if (partner.id === 23) {
							return <Lukoil key={partner.id} className={styles.partner} />;
						}

						return (
							<PartnerItem
								key={partner.id}
								className={styles.partner}
								iconClassName={partner.className && styles[partner.className]}
								name={partner.name}
							/>
						);
					})}
					<Link
						className={clsx(styles.link, styles.partner)}
						to="https://geomodel.ru/petrophysicsxxi#themes"
						target="_blank"
					>
						<span className={styles.link_text}>
							Присоединиться к конференции
						</span>
						<SvgIcon className={styles.link__icon} name="arrow-top" />
					</Link>
					<div className={styles.controls}>
						<button className={styles.controls__button} onClick={toggleButton}>
							{isPartnersHidden ? 'Показать еще' : 'Скрыть'}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
