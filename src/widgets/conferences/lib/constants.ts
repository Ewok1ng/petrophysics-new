/* eslint-disable import/no-internal-modules */
import conference1 from '@shared/assets/images/conferences/1.jpg';
import conference2 from '@shared/assets/images/conferences/2.jpg';
import conference3 from '@shared/assets/images/conferences/3.jpg';
import conference4 from '@shared/assets/images/conferences/4.jpg';
import conference5 from '@shared/assets/images/conferences/5.jpg';
import conference6 from '@shared/assets/images/conferences/6.jpg';

import { IConference } from './types';

export const CONFERENCES: readonly IConference[] = [
	{
		id: 1,
		href: 'https://tuep.ru/',
		imageSrc: conference1,
		alt: ' Tatarstan UPEXPRO 2025'
	},
	{
		id: 2,
		href: 'https://cheorconference.ru/about',
		imageSrc: conference2,
		alt: 'Chemistry Development Technology'
	},
	{
		id: 3,
		href: 'https://t.me/+f4bvVmRZzVc2NjFi',
		imageSrc: conference3,
		alt: 'Разработка газоконденсатных месторождений'
	},
	{
		id: 4,
		href: 'https://pgcconf.ru',
		imageSrc: conference4,
		alt: 'Practice GeoChemistry 2025'
	},
	{
		id: 5,
		href: 'https://t.me/+bC81bXWSHqkyZDU6',
		imageSrc: conference5,
		alt: 'Актуальные направления цифровизации и развития нейросетевых технологий в нефтегазовой отравли'
	},
	{
		id: 6,
		href: 'https://karb0n.ru/',
		imageSrc: conference6,
		alt: 'KARBON 2025'
	}
];
