import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { Registration } from '@features/registration';
import { Logo, SvgIcon } from '@shared/ui';

import styles from './footer.module.scss';

interface Props {
	className?: string;
}

export const Footer = ({ className }: Props) => {
	return (
		<header className={clsx(styles.footer, className)}>
			<div className={styles.footer__wrapper}>
				<Link className={styles.footer__link} to="/">
					<Logo className={styles.footer__logo} />
				</Link>

				<nav className={styles.menu}>
					<ul className={styles.menu__list}>
						<li className={styles.menu__list_item}>
							<a className={styles.menu__list_link} href="/#directions">
								Направления
							</a>
						</li>
						<li className={styles.menu__list_item}>
							<a className={styles.menu__list_link} href="/#conditions">
								Правила и условия
							</a>
						</li>
						<li className={styles.menu__list_item}>
							<a className={styles.menu__list_link} href="/#programm">
								Программа
							</a>
						</li>
						<li
							className={clsx(
								styles.menu__list_item,
								styles['menu__list_item--multiple']
							)}
						>
							<a className={styles.menu__list_link} href="/#contacts">
								Контакты
							</a>
							<Link
								className={styles.menu__list_link}
								to="https://api.whatsapp.com/send/?phone=79520369998"
								target="_blank"
							>
								<SvgIcon className={styles.menu__list_icon} name="whatsapp" />
							</Link>
							<Link
								className={styles.menu__list_link}
								to="https://t.me/pp21_conf"
								target="_blank"
							>
								<SvgIcon className={styles.menu__list_icon} name="tg" />
							</Link>
						</li>
					</ul>
				</nav>
				<Registration
					className={styles.registration}
					text="Подать тезисы"
					border={false}
				/>
			</div>
		</header>
	);
};
