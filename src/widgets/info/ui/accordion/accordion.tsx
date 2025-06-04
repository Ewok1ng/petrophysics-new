import { PropsWithChildren, ReactNode, useState } from 'react';
import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './accordion.module.scss';

interface Props extends PropsWithChildren {
	className?: string;
	title: ReactNode;
}

export const Accordion = ({ className, title, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleAccordion = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<div className={clsx(styles.accordion, className)}>
			<header className={styles.accordion__header} onClick={toggleAccordion}>
				<div className={styles.accordion__title}>{title}</div>
				<button className={styles.accordion__button}>
					{isOpen ? (
						<SvgIcon
							name="minus"
							className={clsx(
								styles.accordion__icon,
								styles['accordion__icon--minus']
							)}
						/>
					) : (
						<SvgIcon
							name="plus"
							className={clsx(
								styles.accordion__icon,
								styles['accordion__icon--plus']
							)}
						/>
					)}
				</button>
			</header>
			<div
				className={clsx(styles.accordion__body, {
					[styles['accordion__body--active']]: isOpen
				})}
			>
				<div className={styles.accordion__content}>{children}</div>
			</div>
		</div>
	);
};
