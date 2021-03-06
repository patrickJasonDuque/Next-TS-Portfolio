import styles from '../styles/Name.module.scss';

interface Props {}

const Name: React.FC<Props> = () => {
	return (
		<h3>
			P A T R I C K <span className={styles.slash}>/</span> <span className={styles.lastName}>D</span>
		</h3>
	);
};

export default Name;
