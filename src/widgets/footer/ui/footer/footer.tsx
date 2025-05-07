import clsx from 'clsx';

import { Registration } from '@features/registration';
import { Contact } from '@entities/contact';
import { Logo } from '@shared/ui';

import styles from './footer.module.scss';

interface Props {
	className?: string;
}

export const Footer = ({ className }: Props) => {
	return (
		<footer className={clsx(styles.footer, className)}>
			<div className={styles.footer__top}>
				<div className={styles.container}>
					<div className={styles.footer__top_inner}>
						<div className={styles.footer__logo_wrapper}>
							<Logo className={styles.footer__logo} />
						</div>
						<nav className={styles.menu}>
							<ul className={styles.menu__list}>
								<li className={styles.menu__list_item}>
									<a className={styles.menu__list_link} href="/#directions">
										Направления
									</a>
								</li>
								<li className={styles.menu__list_item}>
									<a className={styles.menu__list_link} href="/#conditions">
										Условия
									</a>
								</li>
								<li className={styles.menu__list_item}>
									<a className={styles.menu__list_link} href="/#programm">
										Программа
									</a>
								</li>
							</ul>
						</nav>
						<Registration />
					</div>
				</div>
			</div>
			<div className={styles.footer__bottom}>
				<div className={styles.container}>
					<div className={styles.footer__bottom_inner}>
						<h5 className={styles.footer__bottom_title}>Контакты</h5>
						<ul id="contacts" className={styles.footer__contacts}>
							<li className={styles.footer__contacts_item}>
								<Contact
									className={styles.footer__contacts_link}
									iconName="user"
									title="Абдуллина Элина Айратовна"
								/>
							</li>
							<li className={styles.footer__contacts_item}>
								<Contact
									className={styles.footer__contacts_link}
									href="https://api.whatsapp.com/send/?phone=79520369998"
									iconName="whatsapp"
									title="+7 952 036 99 98"
								/>
							</li>
							<li className={styles.footer__contacts_item}>
								<Contact
									className={styles.footer__contacts_link}
									href="https://t.me/pp21_conf"
									iconName="tg"
									title="@pp21_conf"
								/>
							</li>
							<li className={styles.footer__contacts_item}>
								<Contact
									className={styles.footer__contacts_link}
									href="mailto:pp21.conf@yandex.ru"
									iconName="at"
									title="pp21.conf@yandex.ru"
								/>
							</li>
							<li className={styles.footer__contacts_item}>
								<Contact
									className={styles.footer__contacts_link}
									iconName="address"
									title={
										<>
											«ИТ-парк» <br /> г. Казань, ул. Петербургская, д. 52
										</>
									}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
