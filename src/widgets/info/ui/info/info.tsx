import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Contact } from '@entities/contact';
import { SvgIcon } from '@shared/ui';

import { RULES, SCHEDULE } from '../../lib';

import { Accordion } from '../accordion';

import styles from './info.module.scss';

export const Info = () => {
	return (
		<section id="info" className={styles.info}>
			<div className={styles.info__inner}>
				<div
					className={clsx(styles.info__column, styles['info__column--info'])}
				>
					<h3 className={styles.info__title}>
						Принять участие проще простого...
					</h3>
					<div className={styles.info__group}>
						<h4 className={styles.info__contacts_title}>
							Организационные вопросы
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
									href="https://api.whatsapp.com/send/?phone=79520369998"
									iconName="whatsapp"
									title="+7 952 036 99 98"
									target="_blank"
								/>
							</li>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
									href="https://t.me/pp21_conf"
									iconName="tg"
									title="@pp21_conf"
									target="_blank"
								/>
							</li>
							<li className={styles.info__contacts_item}>
								<Contact
									variant="dark"
									className={styles.info__contacts_link}
									href="mailto:pp21.conf@yandex.ru"
									iconName="at"
									title="pp21.conf@yandex.ru"
									target="_blank"
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
									target="_blank"
								/>
							</li>
						</ul>
					</div>

					<div className={styles.info__group}>
						<h4
							className={clsx(
								styles.info__contacts_title,
								styles['info__contacts_title--operator']
							)}
						>
							Финансовый оператор мероприятия
						</h4>
						<Link
							className={styles.info__contacts_group_link}
							to="https://geomodel.ru/contacts"
							target="_blank"
						>
							ООО «Геомодель Развитие»
						</Link>
					</div>
				</div>
				<div className={styles.info__column}>
					<ul className={styles.info__list}>
						<li id="conditions" className={styles.info__list_item}>
							<Accordion key={1} title="Правила подачи публикации">
								{RULES.map(rule => (
									<div key={rule.id} className={styles.rules}>
										<h3 className={styles.rules__title}>{rule.title}</h3>
										<div className={styles.rules__description}>
											{typeof rule.description === 'string' && (
												<p>{rule.description}</p>
											)}

											{Array.isArray(rule.description) &&
												rule.description.map((item, index) =>
													typeof item === 'string' ? (
														<p key={index}>{item}</p>
													) : (
														item
													)
												)}

											{React.isValidElement(rule.description) &&
												rule.description}
										</div>
									</div>
								))}
							</Accordion>
						</li>
						<li className={styles.info__list_item}>
							<Accordion key={2} title="Подать тезисы">
								<div className={styles.deadline}>
									<p>
										Участникам, желающим представить свои доклады на конференции
										«Петрофизика 21», необходимо <b>до 01.08.2025</b> пройти
										регистрацию и отправить тезисы на сайте <b>Геомодель</b>.
									</p>
									<p>
										По вопросам регистрации можно обращаться -{' '}
										<a href="mailto:registration@geomodel.ru">
											<b>registration@geomodel.ru.</b>
										</a>
									</p>
									<p>
										По вопросам подачи тезисов -{' '}
										<a href="mailto:events@geomodel.ru">
											<b>events@geomodel.ru.</b>
										</a>
									</p>
									<p>
										По общим организационным вопросам -{' '}
										<a href="mailto:pp21.conf@yandex.ru">
											<b>pp21.conf@yandex.ru</b>
										</a>
									</p>
									{/* Участникам, желающим представить свои доклады на конференции
									«Петрофизика 21», необходимо <b>до 01.08.2025</b> пройти
									регистрацию (<b>registration@geomodel.ru</b>) и отправить
									тезисы в организационный комитет по почтe
									<b> events@geomodel.ru</b>
									или на сайте <b>Геомодель</b>. */}
								</div>
								<div className={styles.links}>
									<Link
										className={styles.link}
										to="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruIR2IkxEdU5xgF66ho43tWsml5jSU0tpdUOPSwSe-5g8pirdoQgKwaaDe-Nv9vPvCa_mySKpgEUOkyweDVIo8vQHvPTvaUIkC9c75KkQHpQZsYjL-3aaWVwZ7WLoJUYXtw%3D%3D%3Fsign%3DTrKAwxH5OapEphK0lVd9fWUM9EZpaodiKUG--kMvo7I%3D&name=Petrophysics25_Conference_template.docx&nosw=1"
										target="_blank"
									>
										<span className={styles.link__title}>
											Скачать шаблоны тезисов
										</span>
										<SvgIcon
											className={clsx(
												styles.link__icon,
												styles['link__icon--download']
											)}
											name="arrow"
										/>
									</Link>
									<Link
										className={styles.link}
										to="https://geomodel.ru/petrophysicsxxi#themes"
										target="_blank"
									>
										<span className={styles.link__title}>Подать тезисы</span>
										<SvgIcon className={styles.link__icon} name="arrow" />
									</Link>
								</div>
							</Accordion>
						</li>
						<li className={styles.info__list_item}>
							<Accordion key={3} title="Оплата участия">
								<h5 className={styles.table__title}>
									Стоимость участия в рублях, включая НДС 20%
								</h5>
								<div className={styles.table}>
									<div className={styles.table__row}>
										<div className={styles.table__column}></div>
										<div className={styles.table__column}>Докладчик</div>
										<div className={styles.table__column}>
											Слушатель (делегат)
										</div>
										<div className={styles.table__column}>
											Оплата после мероприятия
										</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											Члены Ассоциации АГГИ
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											45 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											59 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											74 000
										</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											Обычная стоимость
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											54 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											70 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											88 000
										</div>
									</div>
									<div className={styles.table__row}>
										<div className={styles.table__column}>
											Льготная стоимость
											<span>студенты/аспиранты</span>
											<span>неработающие пенсионеры</span>
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											17 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										>
											17 000
										</div>
										<div
											className={clsx(
												styles.table__column,
												styles['table__column--price']
											)}
										></div>
									</div>
								</div>

								<b className={styles.payment}>Срок оплаты - до 01.09.2025</b>
							</Accordion>
						</li>
						<li id="programm" className={styles.info__list_item}>
							<Accordion key={4} title="Программа конференции">
								<div className={styles.schedule}>
									<p className={styles.schedule__text}>
										Уважаемые участники, данная программа является
										педварительной. Организаторы конференции «Петрофизика 21»
										оставляют за собой право внесение изменений в программу
										конференции и порядок выступления участников.
									</p>

									<div className={styles.schedule__table}>
										{Object.entries(SCHEDULE).map(([day, schedule]) => (
											<div key={day} className={styles.schedule__column}>
												<div className={styles.schedule__column_header}>
													{day} день
												</div>
												<ul className={styles.schedule__list}>
													{schedule.map(item => (
														<li
															key={item.id}
															className={styles.schedule__list_item}
														>
															<div className={styles.schedule__time}>
																<span>{item.from}</span>
																<span>{item.to}</span>
															</div>
															<span>{item.title}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>
							</Accordion>
						</li>
						<li className={styles.info__list_item}>
							<Accordion key={5} title="Отели">
								<p className={styles.info__text}>
									Участники самостоятельно оплачивают проживание и транспортные
									расходы при переезде.{' '}
									<Link
										className={clsx(
											styles.info__text,
											styles['info__text--outlined']
										)}
										to="https://drive.google.com/file/d/1IIS02r1dmO-BQuLrsK2j56HSBaLuYV0m/view?usp=sharing"
										target="_blank"
									>
										Основные варианты размещения в отелях, которые мы
										рекомендуем, можно найти <b>здесь</b>
									</Link>
								</p>
								<p className={styles.info__text}>
									Место проведения конференции - «ИТ-парк», г. Казань, ул.
									Петербургская, д. 52.
								</p>
							</Accordion>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
