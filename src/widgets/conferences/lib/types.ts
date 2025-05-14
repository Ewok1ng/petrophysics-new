export interface IConference {
	id: number;
	className?: string;
	iconClassName?: string;
	iconName: string;
	title: string;
	link: string;
	description: string;
	date: string;
	dateColor: 'red' | 'green';
	city: string;
}
