import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiUpArrow } from 'react-icons/bi';
import { Badge } from 'react-bootstrap';

import styles from '../styles/BackToTop.module.scss';

interface Props {}

const BackToTopButton: React.FC<Props> = () => {
	const [ showScroll, setShowScroll ] = useState(false);

	if (process.browser) {
		const checkScrollTop = () => {
			if (!showScroll && window.pageYOffset > 400) {
				setShowScroll(true);
			} else if (showScroll && window.pageYOffset <= 400) {
				setShowScroll(false);
			}
		};

		window.addEventListener('scroll', checkScrollTop);
	}

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Badge
			variant='light'
			onClick={scrollTop}
			className={`${styles.scrollTop} px-1`}
			style={{ opacity: showScroll ? 1 : 0 }}>
			<IconContext.Provider
				value={{
					size: '3em'
				}}>
				<BiUpArrow />
			</IconContext.Provider>
		</Badge>
	);
};

export default BackToTopButton;
