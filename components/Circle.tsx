import { Fragment } from 'react';

import styles from '../styles/Circle.module.scss';

interface Props {
	title: string;
}

const Circle: React.FC<Props> = ({ title }) => {
	return (
		<div className={`${styles.circle} text-center d-flex justify-content-center align-items-center`}>
			<h4>{title}</h4>
		</div>
	);
};

export default Circle;
