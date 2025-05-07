import { PARTNERS } from '../../lib';
import { PartnerItem } from '../partner-item';

import styles from './partners.module.scss';

export const Partners = () => {
	return (
		<section className={styles.partners}>
			<div className={styles.container}>
				<div className={styles.partners__inner}>
					<h4 className={styles.partners__title}>Участники</h4>
					<div className={styles.partners__items}>
						{PARTNERS.map(partner => (
							<PartnerItem
								key={partner.id}
								className={
									partner.className ? styles[partner.className] : undefined
								}
								name={partner.name}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
