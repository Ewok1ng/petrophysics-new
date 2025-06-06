import { ReactNode } from 'react';

interface IScheduleItem {
	id: number;
	from: string;
	to: string;
	title: string;
}

interface IRule {
	id: number;
	title: string;
	description: string | ReactNode | (ReactNode | string)[];
}

export const RULES: IRule[] = [
	{
		id: 1,
		title: 'Публикация',
		description: [
			<p key={1}>
				Тезисы всех докладов, включённых в программу конференции, будут
				опубликованы в электронном сборнике тезисов на сайте{' '}
				<a href="https://www.geomodel.ru" target="_blank" rel="noreferrer">
					<b>www.geomodel.ru</b>
				</a>{' '}
				и проиндексированы в <b>РИНЦ</b>.
			</p>
		]
	},
	{
		id: 2,
		title: 'Правила и условия публикации',
		description: ''
	},
	{
		id: 3,
		title: 'Авторское право',
		description:
			'Как автор, вы всегда остаётесь владельцем авторских прав на ваши тезисы и презентации доклада и их содержание. Однако вы передаёте «Геомодель» разрешение на использование вашей работы (или, с юридической точки зрения, вы выдаёте лицензию на ваши тезисы).'
	},
	{
		id: 4,
		title: 'Критерии подачи материалов',
		description: [
			'Подавая тезисы доклада или предоставляя презентацию в «Геомодель», вы подтверждаете, что имеете на это право и тезисы и презентация не нарушают какие-либо права третьих лиц (интеллектуальная собственность) и не могут причинить вред «Геомодель» или третьей стороне. Загружая тезисы или презентацию на сайт, вы подтверждаете, что:',
			<ul key="rules">
				<li>
					владеете всеми правами (включая интеллектуальную собственность) на все
					элементы тезисов или презентации (как то: текст, рисунки, графики,
					диаграммы, таблицы, и т.д.) или имеете документально подтверждённое
					право на подачу тезисов или презентации
				</li>
				<li>
					ваша работа не содержит плагиата, а также не существует третьих лиц,
					обладающих какими-либо правами на содержание ваших тезисов или
					презентации, которые могут иметь возражение по поводу их использования
					«Геомодель» (и её партнёрами)
				</li>
				<li>
					ваши тезисы или презентация не содержат неверной или незаконной
					информации, или информации, которая может нанести ущерб репутации
					«Геомодель» или третьих лиц
				</li>
				<li>
					ваши тезисы или презентация не содержат коммерческой тайны третьей
					стороны
				</li>
				<li>
					ваши тезисы или презентация не содержат порочащих или непристойных
					материалов и не могут тем или иным образом нанести ущерб репутации и
					доброму имени «Геомодель» или третьих лиц
				</li>
				<li>
					ваши тезисы или презентация не наносят финансовый или иной ущерб
					третьим лицам (например, если тезисы содержат конфиденциальную
					информацию)
				</li>
			</ul>,
			'В случае если ваша работа не удовлетворяет всем вышеперечисленным критериям, вы должны воздержаться от публикации таких материалов.'
		]
	},

	{
		id: 5,
		title: 'Исполнение всех критериев подачи',
		description:
			'Для «Геомодель» очень важно, чтобы все вышеперечисленные критерии были выполнены. Обращаем ваше внимание, что вы несёте полную ответственность за содержание файла с тезисами и презентацией и/или несоответствие критериям подачи. «Геомодель» не обязана проверять содержание поданных материалов или проверять, может ли его использование повредить «Геомодель» или третьей стороне. Если ваши тезисы или презентация не отвечают одному или нескольким критериям, описанным выше, в случае жалоб или претензий третьей стороны к «Геомодель» или партнёрам, «Геомодель» может принять решение передать ответственность и претензии на вас. Загружая тезисы доклада или презентацию, вы соглашаетесь возместить все расходы и убытки, которые являются результатом того, что ваши тезисы или презентация не соответствуют вышесказанным требованиям (например, судебные издержки, расходы за удаления тезисов и/или презентации из всех источников и т.д.). Кроме того, вы должны обеспечить полное сотрудничество с «Геомодель», чтобы «Геомодель» могла оперативно и тщательно реагировать на любые претензии третьих лиц.'
	},
	{
		id: 6,
		title: 'Эксклюзивные права "Геомодель" в течение 6 месяцев',
		description: [
			'Для «Геомодель» важно, чтобы тезисы докладов или презентация не были использованы на других мероприятиях любыми другими сторонами (включая вас как автора).',
			'Поэтому публикация тезисов докладов и выступление с презентацией на мероприятии являются эксклюзивными. Таким образом, вы соглашаетесь, что «Геомодель» является единственной стороной, которая имеет право на использование тезисов докладов и презентаций в течение 6 месяцев после мероприятия, на которое были направлены тезисы и презентация (в юридических терминах, вы передаёте «Геомодель» лицензию на 6 месяцев). Вы заявляете, что вы не представляли тезисы докладов или презентацию другим сторонам и не будете этого делать в течение 6 месяцев. Это означает, что пока эти 6 месяцев не закончились, вы не можете копировать или делать доступными тезисы докладов или презентацию, опубликовав их в интернете или отправив третьим лицам. После 6 месяцев вы можете свободно использовать тезисы докладов и презентацию в любых целях.',
			'Исключения могут быть сделаны для внутреннего использования или для образовательных целей. Для подтверждения свяжитесь с нами, используя контактную информацию.'
		]
	},
	{
		id: 7,
		title: 'Использование тезисов или презентации докладов "Геомодель"',
		description: [
			'Загружая тезисы или презентацию, вы даёте «Геомодель» разрешение использовать тезисы докладов и презентацию на мероприятии.',
			'Если вы предоставляете тезисы докладов или презентацию на мероприятии, это говорит о том, что вы предоставляете «Геомодель» разрешение показывать ваши тезисы и презентацию на конференции для всех участников в конференц–залах и в раздаточных материалах.',
			'В дополнении ко всему вы разрешаете публиковать тезисы докладов или презентацию в базе данных РИНЦ или других базах данных, которые будут у «Геомодель» в будущем.Наконец, «Геомодель» может опубликовать тезисы или презентацию с помощью других средств или третьими лицами, например, издателями журналов, баз данных или издателями печатной продукции.',
			'Эксклюзивные права «Геомодель» истекают спустя 6 месяцев, однако «Геомодель» имеет право использовать тезисы докладов и презентацию неограниченно по времени. Это означает, что даже после этих шести месяцев ООО «Геомодель» все ещё может использовать тезисы или презентацию описанными выше способами.'
		]
	}
];

export const SCHEDULE: Record<number, Array<IScheduleItem>> = {
	1: [
		{
			id: 1,
			from: '09:00',
			to: '10:00',
			title: 'Регистрация участников'
		},
		{
			id: 2,
			from: '10:00',
			to: '10:20',
			title:
				'Церемония открытия. Приветственные слова от программного комитета Нургалиев Д.К., Беляков Е.О.'
		},
		{
			id: 3,
			from: '10:20',
			to: '10:40',
			title: 'Кофе брейк'
		},
		{
			id: 4,
			from: '10:40',
			to: '12:40',
			title:
				'Работа секции «Аппаратура ГИС и современное скважинное оборудование» '
		},
		{
			id: 5,
			from: '12:40',
			to: '13:40',
			title: 'Обеденный перерыв'
		},
		{
			id: 6,
			from: '13:40',
			to: '15:40',
			title:
				'Работа секции «Программные средства и инструменты автоматизации процесса интерпретации материалов ГИС»'
		},
		{
			id: 7,
			from: '15:40',
			to: '16:00',
			title: 'Кофе брейк'
		},
		{
			id: 8,
			from: '16:00',
			to: '18:00',
			title: 'Круглый стол / мастер-классы'
		},
		{
			id: 9,
			from: '20:00',
			to: '22:00',
			title: 'Экскурсия по вечерней Казани'
		}
	],
	2: [
		{
			id: 1,
			from: '09:00',
			to: '10:00',
			title: 'Регистрация участников'
		},
		{
			id: 2,
			from: '10:00',
			to: '10:20',
			title:
				'Приветственные слова от программного комитета Лубинец А.Б, Яценко В.М.'
		},
		{
			id: 3,
			from: '10:20',
			to: '10:40',
			title: 'Кофе брейк'
		},
		{
			id: 4,
			from: '10:40',
			to: '12:40',
			title:
				'Работа секции «Горизонтальные скважины и геологическое сопровождение бурения»'
		},
		{
			id: 5,
			from: '12:40',
			to: '13:40',
			title: 'Обеденный перерыв'
		},
		{
			id: 6,
			from: '13:40',
			to: '15:40',
			title: 'Работа секции «Геомеханическое и петроупругое моделирование»'
		},
		{
			id: 7,
			from: '15:40',
			to: '16:00',
			title: 'Кофе брейк'
		},
		{
			id: 8,
			from: '16:00',
			to: '17:00',
			title: 'Экскурсия по лабораториям КФУ'
		},
		{
			id: 9,
			from: '17:00',
			to: '18:00',
			title: 'Экскурсия в Геологический музей имени А.А. Штукенберга'
		},
		{
			id: 10,
			from: '20:00',
			to: '22:00',
			title: 'Приветственный ужин'
		}
	],
	3: [
		{
			id: 1,
			from: '09:00',
			to: '10:00',
			title: 'Регистрация участников'
		},
		{
			id: 2,
			from: '10:00',
			to: '10:20',
			title:
				'Приветственные слова от программного комитета Акиньшин А.В., Габбасов Д.М.'
		},
		{
			id: 3,
			from: '10:20',
			to: '10:40',
			title: 'Кофе брейк'
		},
		{
			id: 4,
			from: '10:40',
			to: '12:40',
			title:
				'Работа секции «Исследования и моделирование сложнопостроенных коллекторов»'
		},
		{
			id: 5,
			from: '12:40',
			to: '13:40',
			title: 'Обеденный перерыв'
		},
		{
			id: 6,
			from: '13:40',
			to: '15:40',
			title: 'Работа секции «Исследования керна, пластовых флюидов и шлама»'
		},
		{
			id: 7,
			from: '15:40',
			to: '16:00',
			title: 'Кофе брейк'
		},
		{
			id: 8,
			from: '16:00',
			to: '17:00',
			title:
				'Заключительное слово председателя программного комитета. Подведение итогов конференции'
		}
	]
};
