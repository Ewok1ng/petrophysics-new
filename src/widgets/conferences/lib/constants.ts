import { IConference } from './types';

export const CONFERENCES: readonly IConference[] = [
	{
		id: 1,
		iconClassName: 'upexpro',
		city: 'Казань',
		date: '10-12 апреля 2025',
		dateColor: 'green',
		description: 'IX МЕЖДУНАРОДНАЯ молодежная научная КОНФЕРЕНЦИЯ',
		title: 'Tatarstan UpExPro',
		iconName: 'conferences-1',
		link: 'https://t.me/tatarstanupexpro'
	},
	{
		id: 2,
		iconClassName: 'oil',
		city: 'Казань',
		date: '27-28 мая 2025',
		dateColor: 'red',
		description: 'V Международная научно-техническая конференция',
		title: 'Химические методы увеличения нефтеотдачи',
		iconName: 'conferences-2',
		link: 'https://cheorconference.ru/about'
	},
	{
		id: 3,
		iconClassName: 'kfu',
		city: 'Казань',
		date: '30 мая 2025',
		dateColor: 'green',
		description: 'Техническая сессия',
		title: 'РАЗРАБОТКА ГАЗОКОНДЕНСАТНЫХ МЕСТОРОЖДЕНИЙ',
		iconName: 'conferences-3-new',
		link: 'https://t.me/+f4bvVmRZzVc2NjFi'
	},
	{
		id: 4,
		iconClassName: 'pgc',
		city: 'Казань',
		date: '26-27 июня 2025',
		dateColor: 'green',
		description:
			'IV Научно-практическая конференция по нефтяной гидрогеологии, геохимии и гидродинамическому моделированию',
		title: 'Practice GeoChemistry',
		iconName: 'conferences-4',
		link: 'https://pgcconf.ru'
	},
	{
		id: 5,
		iconClassName: 'neural',
		city: 'Казань',
		date: '17-18 июля 2025',
		dateColor: 'green',
		description: 'Круглый стол',
		title:
			'Актуальные направления цифровизации и развития нейросетевых технологий в нефтегазовой отравли',
		iconName: 'conferences-5',
		link: 'https://t.me/+bC81bXWSHqkyZDU6'
	},
	{
		id: 6,
		iconClassName: 'carbon',
		city: 'Казань',
		date: '13-15 августа 2025',
		dateColor: 'green',
		description: 'II Международная научно-практическая конференция ',
		title: 'Карбонатные отложения',
		iconName: 'conferences-6-new',
		link: 'https://karb0n.ru/'
	}
];
