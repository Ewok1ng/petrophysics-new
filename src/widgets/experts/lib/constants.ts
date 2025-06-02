/* eslint-disable import/no-internal-modules */
import exp1 from '@shared/assets/images/experts/exp-1.png';
import exp2 from '@shared/assets/images/experts/exp-2.png';
import exp3 from '@shared/assets/images/experts/exp-3.png';
import exp4 from '@shared/assets/images/experts/exp-4.png';
import exp5 from '@shared/assets/images/experts/exp-5.png';
import exp8 from '@shared/assets/images/experts/exp-8.png';
import exp9 from '@shared/assets/images/experts/exp-9.png';
import exp10 from '@shared/assets/images/experts/exp-10.png';
import exp13 from '@shared/assets/images/experts/exp-13.png';
import exp14 from '@shared/assets/images/experts/exp-14.png';
import exp15 from '@shared/assets/images/experts/exp-15.png';
import exp16 from '@shared/assets/images/experts/exp-16.png';
import exp17 from '@shared/assets/images/experts/exp-17.png';

import { IExpert } from './types';

export const MAIN_EXPERTS: readonly IExpert[] = [
	{
		id: 1,
		title: 'Беляков Евгений',
		description:
			'Руководитель по развитИю дисциплины «Петрофизика» НТЦ «Газпром нефти»',
		imageSrc: ''
	},
	{
		id: 2,
		title: 'Яценко Владислав ',
		description:
			'Заместитель начальника управления геолого- гидродинамического моделирования и экспертизы ПАО «Роснефть»',
		imageSrc: ''
	}
];

export const EXPERTS: readonly IExpert[] = [
	{
		id: 9,
		title: 'Акиньшин Александр',
		description:
			'Старший эксперт экспертно-аналитического управления ПАО «Роснефть»',
		imageSrc: exp9
	},
	{
		id: 6,
		title: 'Арсибеков Антон',
		description: 'Руководитель отдела, эксперт по рок-физике ООО «ТКШ»',
		imageSrc: ''
	},
	{
		id: 10,
		title: 'Береснев Антон',
		description: 'Главный эксперт по петрофизике ООО «Сахалинская Энергия»',
		imageSrc: exp10
	},
	{
		id: 16,
		title: 'Габбасов Дамир',
		description: 'Заместитель начальника отдела геологии ООО «РусГазАльянс»',
		imageSrc: exp17
	},
	{
		id: 12,
		title: 'Габдуллина Галия',
		description: 'Эксперт по петрофизике ООО «БашНИПИнефть»',
		imageSrc: ''
	},
	{
		id: 11,
		title: 'Гильманова Наталья',
		description: 'Главный специалист Проектного офиса ООО «ЛУКОЙЛ-Инжиниринг»',
		imageSrc: ''
	},
	{
		id: 7,
		title: 'Ефимов Виктор',
		description:
			'Начальник НИО петрофизических алгоритмов НИПИ «СургутНИПИнефть»',
		imageSrc: ''
	},
	{
		id: 8,
		title: 'Кокарев Павел',
		description:
			'Начальник центра обработки и интерпретации ООО «Газпром ВНИИГАЗ»',
		imageSrc: exp8
	},
	{
		id: 13,
		title: 'Коровина Татьяна',
		description: 'Эксперт по керновым данным ООО «Корэтест сервис»',
		imageSrc: ''
	},
	{
		id: 14,
		title: 'Лаврентьев Марк',
		description: 'Заместитель главного геолога АО «Башнефтегеофизика»',
		imageSrc: exp14
	},
	{
		id: 1,
		title: 'Лубинец Алексей',
		description:
			'Генеральный директор ООО «Омни Дата», руководитель разработки профильного геофизического ПО «Гамма»',
		imageSrc: exp1
	},
	{
		id: 3,
		title: 'Мамяшев Венер',
		description: 'Генеральный директор ООО «НПЦ Тюменьгеофизика»',
		imageSrc: exp3
	},
	{
		id: 13,
		title: 'Нургалиев Данис',
		description:
			'Проректор по направлениям нефтегазовых технологий, природопользования и наук о Земле Казанского (Приволжского) федерального университета',
		imageSrc: exp13
	},
	{
		id: 15,
		title: 'Овчаренко Юрий',
		description: 'Независимый эксперт по геомеханике',
		imageSrc: exp15
	},
	{
		id: 4,
		title: 'Петерсилье Виктор',
		description:
			'Советник генерального директора, д.г.-м.н., профессор ФГБУ «ВНИГНИ»',
		imageSrc: exp4
	},
	{
		id: 2,
		title: 'Хабаров Алексей',
		description:
			'Руководитель управления научно-технического развития и технических данных ООО «Сахалинская Энергия»',
		imageSrc: exp2
	},
	{
		id: 16,
		title: 'Шуматбаев Кирилл',
		description: 'Главный эксперт ДРМ СП «Татнефть-Добыча» «ТатНИПИнефть»',
		imageSrc: exp16
	},
	{
		id: 5,
		title: 'Яценко Владислав',
		description: 'Заместитель начальника управления ПАО «Роснефть»',
		imageSrc: exp5
	}
];
