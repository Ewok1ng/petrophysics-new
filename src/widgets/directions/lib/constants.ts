import { IDirection } from './types';

export const DIRECTIONS: readonly IDirection[] = [
	{
		id: 1,
		title: 'Исследования и моделирование сложнопостроенных коллекторов',
		icon: 'directions-1',
		left: '10%',
		bottom: '55%',
		maxWidth: '350rem'
	},
	{
		id: 2,
		title: 'Исследования керна, пластовых флюидов и шлама',
		icon: 'directions-2',
		left: '30%',
		bottom: '30%',
		maxWidth: '330rem'
	},
	{
		id: 3,
		title: 'Горизонтальные скважины и геологическое сопровождение бурения',
		icon: 'directions-3',
		left: '60%',
		bottom: '60%',
		maxWidth: '500rem'
	},
	{
		id: 4,
		title: 'Аппаратура ГИС и современное скважинное оборудование',
		icon: 'directions-4',
		left: '5%',
		bottom: '10%',
		maxWidth: '370rem'
	},
	{
		id: 5,
		title:
			'Программные средства и инструменты автоматизации процесса интерпретации материалов ГИС',
		icon: 'directions-5',
		left: '45%',
		bottom: '5%',
		maxWidth: '390rem'
	},
	{
		id: 6,
		title: 'Геомеханическое и петроупругое моделирование',
		icon: 'directions-6',
		left: '75%',
		bottom: '20%',
		maxWidth: '300rem'
	}
];
