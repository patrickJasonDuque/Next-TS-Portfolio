import Head from '../components/Head';
import styles from '../styles/Home.module.scss';

import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
		</div>
	);
}
