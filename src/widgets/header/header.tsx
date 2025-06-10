import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Registration } from '@features/registration';
import { Logo, SvgIcon } from '@shared/ui';

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
		<>
			<header className={styles.header}>
				<div className={styles.header__wrapper}>
					<button className={styles.burger_button} onClick={toggleBurgerMenu}>
						<SvgIcon className={styles.burger_button__icon} name="burger" />
					</button>

					<Link className={styles.header__link} to="/">
						<Logo className={styles.header__logo} />
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
								<Link
									className={styles.menu__list_link}
									to="https://t.me/pp21_conf"
									target="_blank"
								>
									@pp21_conf
								</Link>
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
			<div
				className={clsx(styles.burger_menu, {
					[styles['burger_menu--active']]: isBurgerMenuActive
				})}
			>
				<div className={styles.burger_menu__inner}>
					<nav className={styles.burger_menu__menu}>
						<ul
							className={styles.burger_menu__list}
							onClick={() => {
								setIsBurgerMenuActive(false);
							}}
						>
							<li className={styles.burger_menu__list_item}>
								<Link className={styles.burger_menu__list_link} to="/">
									Главная
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__list_item}>
								<Link
									className={styles.burger_menu__list_link}
									to={{
										hash: 'directions'
									}}
								>
									О конференции
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
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
									Правила и условия
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
							<li className={styles.burger_menu__list_item}>
								<Link
									className={clsx(
										styles.burger_menu__list_link,
										styles['burger_menu__list_link--underline']
									)}
									to="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruIR2IkxEdU5xgF66ho43tWsml5jSU0tpdUOPSwSe-5g8pirdoQgKwaaDe-Nv9vPvCa_mySKpgEUOkyweDVIo8vQHvPTvaUIkC9c75KkQHpQZsYjL-3aaWVwZ7WLoJUYXtw%3D%3D%3Fsign%3DTrKAwxH5OapEphK0lVd9fWUM9EZpaodiKUG--kMvo7I%3D&name=Petrophysics25_Conference_template.docx&nosw=1"
									target="_blank"
								>
									Шаблон оформления тезисов
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="schevron-right"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__list_item}>
								<Link
									className={clsx(
										styles.burger_menu__list_link,
										styles['burger_menu__list_link--underline']
									)}
									to="https://geomodel.ru/petrophysicsxxi#themes"
									target="_blank"
								>
									Подать тезисы
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="arrow"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__list_item}>
								<Link
									className={clsx(
										styles.burger_menu__list_link,
										styles['burger_menu__list_link--underline']
									)}
									to="https://t.me/pp21_conf"
									target="_blank"
								>
									Присоединиться к нам
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="tg"
									/>
								</Link>
							</li>
						</ul>
					</nav>
					<div className={styles.burger_menu__contacts}>
						<h5 className={styles.burger_menu__contacts_title}>
							Организационные вопросы
						</h5>
						<ul
							className={styles.burger_menu__contacts_list}
							onClick={() => {
								setIsBurgerMenuActive(false);
							}}
						>
							<li className={styles.burger_menu__contacts_item}>
								<Link
									className={clsx(styles.burger_menu__list_link)}
									to="https://t.me/pp21_conf"
									target="_blank"
								>
									Абдуллина Элина Айратовна
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="user"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Link
									className={clsx(styles.burger_menu__list_link)}
									to="https://api.whatsapp.com/send/?phone=79520369998"
									target="_blank"
								>
									+7 952 036 99 98
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="whatsapp"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Link
									className={clsx(styles.burger_menu__list_link)}
									to="mailto:pp21.conf@yandex.ru"
									target="_blank"
								>
									pp21.conf@yandex.ru
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="at"
									/>
								</Link>
							</li>
							<li className={styles.burger_menu__contacts_item}>
								<Link className={clsx(styles.burger_menu__list_link)} to="#">
									<>
										«ИТ-парк» <br /> г. Казань, ул. Петербургская, д. 52
									</>
									<SvgIcon
										className={styles.burger_menu__list_icon}
										name="address"
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
