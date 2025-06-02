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
	return (
		<section className={styles.partners}>
			<div className={styles.partners__inner}>
				<div className={styles.partners__items}>
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
					<Link className={clsx(styles.link, styles.partner)} to="#">
						<span className={styles.link_text}>
							Присоединиться к конференции
						</span>
						<SvgIcon className={styles.link__icon} name="arrow-top" />
					</Link>
				</div>
			</div>
		</section>
	);
};
