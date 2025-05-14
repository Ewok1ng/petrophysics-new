import { PARTNERS } from '../../lib';
import { Litosphere } from '../litosphere';
import { PartnerItem } from '../partner-item';
import { Sakhalinenergy } from '../sakhalinenergy';

import styles from './partners.module.scss';

export const Partners = () => {
	return (
		<section className={styles.partners}>
			<div className={styles.container}>
				<div className={styles.partners__inner}>
					<h4 className={styles.partners__title}>Участники</h4>
					<div className={styles.partners__items}>
						{PARTNERS.map(partner => {
							if (partner.id === 1) {
								return <Sakhalinenergy key={partner.id} />;
								return;
							}

							if (partner.id === 41) {
								return <Litosphere key={partner.id} />;
							}

							return (
								<PartnerItem
									key={partner.id}
									className={
										partner.className ? styles[partner.className] : undefined
									}
									name={partner.name}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
