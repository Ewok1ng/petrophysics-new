/* eslint-disable import/no-internal-modules */
import exp1 from '@shared/assets/images/experts/exp-1.png';
import exp2 from '@shared/assets/images/experts/exp-2.png';
import exp3 from '@shared/assets/images/experts/exp-3.png';
import exp4 from '@shared/assets/images/experts/exp-4.png';
import exp5 from '@shared/assets/images/experts/exp-5.png';
import exp9 from '@shared/assets/images/experts/exp-9.png';
import exp10 from '@shared/assets/images/experts/exp-10.png';
import exp14 from '@shared/assets/images/experts/exp-15.png';
import exp15 from '@shared/assets/images/experts/exp-14.png';

import { IExpert } from './types';

export const EXPERTS: readonly IExpert[] = [
	{
		id: 1,
		title: 'Любенец Алексей',
		description: 'Генеральный директор ООО «Омни Дата»',
		imageSrc: exp1
	},
	{
		id: 2,
		title: 'Хабаров Алексей',
		description:
			'Руководитель управления научно-технического развития и технических данных ООО «Сахалинская Энергия»',
		imageSrc: exp2
	},
	{
		id: 3,
		title: 'Мамяшев Венер',
		description: 'Генеральный директор ООО «НПЦ Тюменьгеофизика»',
		imageSrc: exp3
	},
	{
		id: 4,
		title: 'Петерсилье Виктор',
		description:
			'Советник генерального директора, д.г.-м.н., профессор ФГБУ «ВНИГНИ»',
		imageSrc: exp4
	},
	{
		id: 5,
		title: 'Яценко Владислав',
		description: 'Заместитель начальника управления ПАО «Роснефть»',
		imageSrc: exp5
	},
	{
		id: 6,
		title: 'Арсибеков Антон',
		description: 'Руководитель отдела, эксперт по рок-физике ООО «ТКШ»',
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
		imageSrc: ''
	},
	{
		id: 9,
		title: 'Акиньшин Александр',
		description:
			'Старший эксперт экспертно-аналитического управления ПАО «Роснефть»',
		imageSrc: exp9
	},
	{
		id: 10,
		title: 'Береснев Антон',
		description: 'Главный эксперт по петрофизике ООО «Сахалинская Энергия»',
		imageSrc: exp10
	},
	{
		id: 11,
		title: 'Гильманова Наталья',
		description: 'Главный специалист Проектного офиса ООО «ЛУКОЙЛ-Инжиниринг»',
		imageSrc: ''
	},
	{
		id: 12,
		title: 'Габдуллина Галия',
		description: 'Эксперт по петрофизике ООО «БашНИПИнефть»',
		imageSrc: ''
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
		description: 'Эксперт по петрофизике ООО «ТКШ»',
		imageSrc: exp14
	},
	{
		id: 15,
		title: 'Овчаренко Юрий',
		description: 'Независимый эксперт по геомеханике',
		imageSrc: exp15
	}
];
