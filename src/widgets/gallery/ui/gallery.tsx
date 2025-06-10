import Marquee from 'react-fast-marquee';

import { GALLERY_ITEMS } from '../lib';

import styles from './gallery.module.scss';

export const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles.gallery__wrapper}>
				<div className={styles.gallery__info}>
					<h5 className={styles.gallery__title}>
						Конференция «Петрофизика XXI»
					</h5>
					<p className={styles.gallery__date}>17-19 мая 2023, Тюмень</p>
				</div>
				<Marquee loop={0} speed={30}>
					<div className={styles.gallery__items}>
						{GALLERY_ITEMS.map(item => (
							<img
								className={styles.gallery__image}
								key={item.id}
								src={item.src}
								alt={item.id.toString()}
							/>
						))}
					</div>
				</Marquee>
			</div>
		</div>
	);
};
