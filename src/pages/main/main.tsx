import { Header } from '@widgets/header';
import { Petrophysics } from '@widgets/petrophysics';
import { Industry } from '@widgets/industry';
import { Experts } from '@widgets/experts';
import { Partners } from '@widgets/partners';
import { Registration } from '@widgets/registration';
import { Info } from '@widgets/info';
import { Conferences } from '@widgets/conferences';
import { Footer } from '@widgets/footer';
import { Directions } from '@widgets/directions';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.main}>
				<Petrophysics headerSlot={<Header />} />
				<Industry />
				<Experts />
				<Directions />
				<Registration />
				<Partners />
				<Registration />
				<Info />
				<Conferences />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};
