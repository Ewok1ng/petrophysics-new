import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Input } from '../input';
import { Radio } from '../radio';

import { Checkbox } from '../checkbox';

import styles from './registration-form.module.scss';

export const RegistrationForm = () => {
	const onSubmitForm = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<section className={styles.registration}>
			<h2 className={styles.registration__title}>Стать участником</h2>
			<p className={styles.registration__info}>
				Чтобы участвовать в конференции необходимо заполнить следующие поля
			</p>
			<div className={styles.container}>
				<div className={styles.registration__inner}>
					<form className={styles.registration__form} onSubmit={onSubmitForm}>
						<div className={styles.registration__column}>
							<Input
								iconName="useralt"
								id="user"
								placeholder="Фамилия Имя Отчество"
							/>
							<Input
								iconName="phone"
								id="phone"
								placeholder="Контактный телефон"
							/>
							<Input iconName="message" id="email" placeholder="Почта" />
							<Input iconName="point" id="city" placeholder="Город" />
							<Input
								iconName="addressalt"
								id="address"
								placeholder="Наименование организации или высшего учебного заведения"
							/>
						</div>
						<div className={styles.registration__column}>
							<div className={styles.radio_group}>
								<h6 className={styles.radio_group__title}>
									Направления конференции
								</h6>
								<div className={styles.radio_group__controls}>
									<Radio
										id="direction1"
										name="direction"
										label="Исследования керна, пластовых флюидов и шлама"
										value={1}
										defaultChecked={true}
									/>
									<Radio
										id="direction2"
										name="direction"
										label="Аппаратура ГИС и современное скважинное оборудование"
										value={2}
									/>
									<Radio
										id="direction3"
										name="direction"
										label="Исследования и моделирование сложнопостроенных коллекторов"
										value={3}
									/>
									<Radio
										id="direction4"
										name="direction"
										label="Горизонтальные скважины и геологическое сопровождение бурения"
										value={4}
									/>
									<Radio
										id="direction5"
										name="direction"
										label="Программные средства и инструменты автоматизации процесса интерпретации материалов ГИС"
										value={5}
									/>
									<Radio
										id="direction6"
										name="direction"
										label="Геомеханическое и петроупругое моделирование"
										value={6}
									/>
								</div>
							</div>
							<div className={styles.radio_group}>
								<h6 className={styles.radio_group__title}>
									Участие в круглых столах и мастер-классах
								</h6>
								<div
									className={clsx(
										styles.radio_group__controls,
										styles['radio_group__controls--row']
									)}
								>
									<Radio
										id="masterclass1"
										name="masterclass"
										label="Буду участвовать"
										value={1}
										defaultChecked={true}
									/>
									<Radio
										id="masterclass2"
										name="masterclass"
										label="Не буду участвовать"
										value={2}
									/>
								</div>
							</div>
							<div className={styles.radio_group}>
								<h6 className={styles.radio_group__title}>
									Участие в круглых столах и мастер-классах
								</h6>
								<div
									className={clsx(
										styles.radio_group__controls,
										styles['radio_group__controls--row']
									)}
								>
									<Radio
										id="format1"
										name="format"
										label="Участник"
										value={1}
										defaultChecked={true}
									/>
									<Radio id="format2" name="format" label="Делегат" value={2} />
									<Radio id="format3" name="format" label="Эксперт" value={3} />
								</div>
							</div>
						</div>

						<div className={styles.upload__title_wrapper}>
							<h6 className={styles.upload__title}>
								Загрузите тезис своей работы
							</h6>
							<Link className={styles.upload__example} to="/" target="_blank">
								Скачать шаблон оформления тезисов
							</Link>
						</div>

						<div className={styles.upload}>
							<label className={styles.upload__label}>
								Добавьте сюда документ (.docx)
								<input
									id="upload"
									className={styles.upload__input}
									type="file"
								/>
							</label>
						</div>

						<div className={styles.registration__checkboxes}>
							<Checkbox
								label="С правилами участия в конференции ознакомлен"
								className={styles.registration__checkbox}
							/>
							<Checkbox
								label="Даю согласие на обработку персональных данных"
								className={styles.registration__checkbox}
							/>
						</div>

						<div className={styles.registration__submit}>
							<button
								className={styles.registration__submit_button}
								type="submit"
							>
								Зарегистрироваться
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
