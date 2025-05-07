/* eslint-disable import/no-internal-modules */
import xxi from '@shared/assets/images/xxi/XXI.svg';
import xxiBg1 from '@shared/assets/images/xxi/1.png';
import xxiBg2 from '@shared/assets/images/xxi/2.png';
import xxiBg3 from '@shared/assets/images/xxi/3.png';
import xxiBg4 from '@shared/assets/images/xxi/4.png';
import xxiBg5 from '@shared/assets/images/xxi/5.png';
import xxiBg6 from '@shared/assets/images/xxi/6.png';
import xxiBg7 from '@shared/assets/images/xxi/7.png';
import xxiBg8 from '@shared/assets/images/xxi/8.png';
import xxiBg9 from '@shared/assets/images/xxi/9.png';
import xxiBg10 from '@shared/assets/images/xxi/10.png';
import xxiBg11 from '@shared/assets/images/xxi/11.png';

interface IBackground {
	id: number;
	imageSrc: string;
	width: string;
	height: string;
	top?: string;
	left?: string;
}

export const BACKGROUNDS: readonly IBackground[] = [
	{ id: 0, imageSrc: xxi, width: '846rem', height: '331rem' },
	{ id: 1, imageSrc: xxiBg1, width: '846rem', height: '331rem' },
	{ id: 2, imageSrc: xxiBg2, width: '846rem', height: '331rem' },
	{ id: 3, imageSrc: xxiBg3, width: '846rem', height: '370rem', left: '10rem' },
	{ id: 4, imageSrc: xxiBg4, width: '846rem', height: '331rem', left: '8rem' },
	{ id: 5, imageSrc: xxiBg5, width: '830rem', height: '331rem', left: '13rem' },
	{ id: 6, imageSrc: xxiBg6, width: '846rem', height: '331rem' },
	{ id: 7, imageSrc: xxiBg7, width: '846rem', height: '331rem' },
	{ id: 8, imageSrc: xxiBg8, width: '846rem', height: '331rem' },

	{ id: 9, imageSrc: xxiBg9, width: '912rem', height: '331rem', left: '27rem' },
	{
		id: 10,
		imageSrc: xxiBg10,
		width: '850rem',
		height: '348rem',
		left: '10rem',
		top: '3rem'
	},
	{ id: 11, imageSrc: xxiBg11, width: '860rem', height: '331rem' }
];
