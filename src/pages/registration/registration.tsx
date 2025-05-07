import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { RegistrationForm } from '@widgets/registration-form';

import { Title } from '@shared/ui';

// eslint-disable-next-line import/no-internal-modules
import xxi from '@shared/assets/images/xxi/XXI-15.svg';

import styles from './registration.module.scss';

export const Registration = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<section className={styles.petrophysics}>
					<div className={styles.background}>
						<img className={styles.background__image} src={xxi} alt="xxi" />
					</div>
					<Title title="Петрофизика" />
				</section>
				<RegistrationForm />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};
