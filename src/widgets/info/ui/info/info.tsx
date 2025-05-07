import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { Contact } from '@entities/contact';

import { SvgIcon } from '@shared/ui';

import { Accordion } from '../accordion';

import styles from './info.module.scss';

export const Info = () => {
	return (
		<section id="info" className={styles.info}>
			<div className={styles.container}>
				<div className={styles.info__inner}>
					<div className={styles.info__column}>
						<h4 className={styles.info__title}>
							Принять участие проще простого...
						</h4>
						<ul className={styles.info__contacts}>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
									href="#"
									iconName="user"
									title="Абдуллина Элина Айратовна"
								/>
							</li>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
									href="https://t.me/pp21_conf"
									iconName="tg"
									title="@pp21_conf"
								/>
							</li>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
									href="mailto:pp21.conf@yandex.ru"
									iconName="at"
									title="pp21.conf@yandex.ru"
								/>
							</li>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
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
					<div className={styles.info__column}>
						<ul className={styles.info__list}>
							<li className={styles.info__list_item}>
								<Link className={styles.info__registration} to="/registration">
									<span>Регистрация</span>
									<SvgIcon
										className={styles.info__registration_icon}
										name="arrow-top"
									/>
								</Link>
							</li>
							<li className={styles.info__list_item}>
								<Accordion title="Правила участия ">
									Скоро здесь появится описание
								</Accordion>
							</li>
							<li className={styles.info__list_item}>
								<Accordion title="Взносы">
									<h5 className={styles.table__title}>
										Стоимость участия в рублях, включая НДС 20%
									</h5>
									<div className={styles.table}>
										<div className={styles.table__row}>
											<div className={styles.table__column}></div>
											<div className={styles.table__column}>
												Докладчик, член комитета
											</div>
											<div className={styles.table__column}>
												Слушатель (делегат)
											</div>
											<div className={styles.table__column}>
												Оплата после мероприятия
											</div>
										</div>
										<div className={styles.table__row}>
											<div className={styles.table__column}>
												<b>Члены Ассоциации АГГИ</b>
											</div>
											<div className={styles.table__column}>45 000</div>
											<div className={styles.table__column}>59 000</div>
											<div className={styles.table__column}>74 000</div>
										</div>
										<div className={styles.table__row}>
											<div className={styles.table__column}>
												<b>Обычная стоимость</b>
											</div>
											<div className={styles.table__column}>54 000</div>
											<div className={styles.table__column}>70 000</div>
											<div className={styles.table__column}>88 000</div>
										</div>
										<div className={styles.table__row}>
											<div className={styles.table__column}>
												<b>Льготная стоимость</b>
												<span>студенты/аспиранты</span>
												<span>неработающие пенсионеры</span>
											</div>
											<div className={styles.table__column}>17 000</div>
											<div className={styles.table__column}>17 000</div>
											<div className={styles.table__column}></div>
										</div>
									</div>
								</Accordion>
							</li>
							<li className={styles.info__list_item}>
								<Accordion title="Программа">
									<div className={styles.schedule}>
										<p className={styles.schedule__text}>
											Адрес проведения конференции: <b>«ИТ-парк»</b> г. Казань,
											ул. Петербургская, д. 52
										</p>

										<div className={styles.schedule__table}>
											<div className={styles.schedule__column}>
												<div className={styles.schedule__column_header}>
													1 день
												</div>
												<ul className={styles.schedule__list}>
													<li className={styles.schedule__list_item}>
														Регистрация участников
													</li>
													<li className={styles.schedule__list_item}>
														Церемония открытия. Приветственные слова от
														программного комитета
													</li>
													<li className={styles.schedule__list_item}>
														Панельная дискуссия
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Кофе брейк
													</li>
													<li className={styles.schedule__list_item}>
														Работа секций
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Обеденный перерыв
													</li>
													<li className={styles.schedule__list_item}>
														Работа секций
													</li>
													<li className={styles.schedule__list_item}>
														Круглый стол
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Приветственный ужин
													</li>
												</ul>
											</div>
											<div className={styles.schedule__column}>
												<div className={styles.schedule__column_header}>
													2 день
												</div>
												<ul className={styles.schedule__list}>
													<li className={styles.schedule__list_item}>
														Регистрация участников
													</li>
													<li className={styles.schedule__list_item}>
														Пленарный доклад
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Кофе брейк
													</li>
													<li className={styles.schedule__list_item}>
														Работа секций
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Обеденный перерыв
													</li>
													<li className={styles.schedule__list_item}>
														Работа секций
													</li>
													<li className={styles.schedule__list_item}>
														Мастер-классы
													</li>
													<li className={styles.schedule__list_item}>
														Подведение итогов конференции
													</li>
													<li className={styles.schedule__list_item}>
														Экскурсия по лабораториям КФУ
													</li>
													<li className={styles.schedule__list_item}>
														Экскурсия в Геологический музей имени А.А.
														Штукенберга
													</li>
												</ul>
											</div>
											<div className={styles.schedule__column}>
												<div className={styles.schedule__column_header}>
													3 день
												</div>
												<ul className={styles.schedule__list}>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														<b>Геологическая экскурсия на теплоходе</b>
													</li>
													<li className={styles.schedule__list_item}>
														Сбор участников, проведение техники безопасности
													</li>
													<li className={styles.schedule__list_item}>
														Обзор истории изучения и геологического строения
														Приказанского района
													</li>
													<li
														className={clsx(
															styles.schedule__list_item,
															styles['schedule__list_item--disabled']
														)}
													>
														Полевой обед
													</li>
													<li className={styles.schedule__list_item}>
														Ознакомление со стратотипом у села Печищи
													</li>
													<li className={styles.schedule__list_item}>
														Остановка у устья оврага «Трехглавый»
													</li>
													<li className={styles.schedule__list_item}>
														Ознакомление с разрезом устья оврага «Черемушка»
													</li>
												</ul>
											</div>
										</div>
									</div>
								</Accordion>
							</li>
							<li className={styles.info__list_item}>
								<Accordion title="Отели">
									<p className={styles.info__text}>
										Участники самостоятельно оплачивают проживание и
										транспортные расходы при переезде.
									</p>
									<p
										className={clsx(
											styles.info__text,
											styles['info__text--outlined']
										)}
									>
										Основные варианты размещения в отелях, которые мы
										рекомендуем, можно найти{' '}
										<Link to="https://drive.google.com/file/d/1IIS02r1dmO-BQuLrsK2j56HSBaLuYV0m/view?usp=sharing">
											здесь
										</Link>
									</p>
								</Accordion>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
