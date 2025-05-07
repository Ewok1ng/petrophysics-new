import {
	PropsWithChildren,
	ReactNode,
	useEffect,
	useRef,
	useState
} from 'react';
import clsx from 'clsx';

import { SvgIcon } from '@shared/ui';

import styles from './accordion.module.scss';

interface Props extends PropsWithChildren {
	className?: string;
	title: ReactNode;
}

export const Accordion = ({ className, title, children }: Props) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (isOpen && contentRef.current) {
			setHeight(contentRef.current.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen, contentRef]);

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
				className={styles.accordion__body}
				ref={contentRef}
				style={{
					maxHeight: `${height}rem`
				}}
			>
				<div className={styles.accordion__content}>{children}</div>
			</div>
		</div>
	);
};
