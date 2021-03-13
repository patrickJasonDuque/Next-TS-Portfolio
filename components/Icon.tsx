import { Fragment } from 'react';
import { Image, Col } from 'react-bootstrap';

import styles from '../styles/Icon.module.scss';

interface Props {
	iconPath: string;
	title: string;
}

const Icon: React.FC<Props> = ({ iconPath, title }) => {
	return (
		<Fragment>
			<Image src={iconPath} fluid className={styles.image} title={title} />
		</Fragment>
	);
};

export default Icon;
