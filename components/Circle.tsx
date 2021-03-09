import { Fragment } from 'react';

import styles from '../styles/Circle.module.scss';

interface Props {}

const Circle: React.FC<Props> = () => {
	return (
		<div className={`${styles.circle} text-center d-flex justify-content-center align-items-center`}>
			<h4>Developer</h4>
		</div>
	);
};

export default Circle;
