import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { Registration } from '@features/registration';

import { Logo, SvgIcon } from '@shared/ui';

import { Contact } from '@entities/contact';

import styles from './header.module.scss';

export const Header = () => {
	const [isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(false);

	const toggleBurgerMenu = () => {
		setIsBurgerMenuActive(prev => !prev);
	};

	useEffect(() => {
		if (isBurgerMenuActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [isBurgerMenuActive]);

	return (
		<header className={styles.header}>
			<div
				className={clsx(styles.burger_menu, {
					[styles['burger_menu--active']]: isBurgerMenuActive
				})}
			>
				<div className={styles.burger_menu__inner}>
					<Link className={styles.burger_menu__main} to="/">
						Главная
					</Link>
					<nav className={styles.burger_menu__menu}>
						<ul
							className={styles.burger_menu__list}
							onClick={() => {
								setIsBurgerMenuActive(false);
							}}
						>
							<li className={styles.burger_menu__list_item}>
								<Link
									className={styles.burger_menu__list_link}
									to={{
										hash: 'directions'
									}}
								>
									Направления
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__list_item}>
								<Link className={styles.burger_menu__list_link} to="">
									Условия
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__list_item}>
								<Link className={styles.burger_menu__list_link} to="">
									Программа
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
						</ul>
					</nav>
					<div className={styles.burger_menu__contacts}>
						<h5 className={styles.burger_menu__contacts_title}>Контакты</h5>
						<ul
							className={styles.burger_menu__contacts_list}
							onClick={() => {
								setIsBurgerMenuActive(false);
							}}
						>
							<li className={styles.burger_menu__contacts_item}>
								<Contact
									className={styles.burger_menu__contacts_link}
									href="#"
									iconName="user"
									title="Абдуллина Элина Айратовна"
								/>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Contact
									className={styles.burger_menu__contacts_link}
									href="https://api.whatsapp.com/send/?phone=79520369998"
									iconName="whatsapp"
									title="+7 952 036 99 98"
								/>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Contact
									className={styles.burger_menu__contacts_link}
									href="https://t.me/pp21_conf"
									iconName="tg"
									title="@pp21_conf"
								/>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Contact
									className={styles.burger_menu__contacts_link}
									href="mailto:pp21.conf@yandex.ru"
									iconName="at"
									title="pp21.conf@yandex.ru"
								/>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Contact
									className={styles.burger_menu__contacts_link}
									href="#"
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
					<Registration
						className={clsx(
							styles.registration,
							styles['registration--mobile']
						)}
						onClick={() => {
							setIsBurgerMenuActive(false);
						}}
					/>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.header__inner}>
					<button className={styles.burger_button} onClick={toggleBurgerMenu}>
						<SvgIcon className={styles.burger_button__icon} name="burger" />
					</button>
					<Link className={styles.header__link} to="/">
						<Logo className={styles.header__logo} />
					</Link>

					<nav className={styles.menu}>
						<ul className={styles.menu__list}>
							<li className={styles.menu__list_item}>
								<Link
									className={styles.menu__list_link}
									to={{
										hash: 'directions'
									}}
								>
									Направления
								</Link>
							</li>
							<li className={styles.menu__list_item}>
								<Link className={styles.menu__list_link} to="">
									Условия
								</Link>
							</li>
							<li className={styles.menu__list_item}>
								<Link className={styles.menu__list_link} to="">
									Программа
								</Link>
							</li>
							<li className={styles.menu__list_item}>
								<Link className={styles.menu__list_link} to="">
									Контакты
								</Link>
							</li>
							<li className={styles.menu__list_item}>
								<Link
									className={styles.menu__list_link}
									to="https://api.whatsapp.com/send/?phone=79520369998"
									target="_blank"
								>
									<SvgIcon className={styles.menu__list_icon} name="whatsapp" />
								</Link>
							</li>
							<li className={styles.menu__list_item}>
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
					<Registration className={styles.registration} />
				</div>
			</div>
		</header>
	);
};
