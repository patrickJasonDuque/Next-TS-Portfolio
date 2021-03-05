import Head from '../components/Head';
import styles from '../styles/Home.module.scss';
import { Button } from 'react-bootstrap';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Button variant='secondary'>
				<strong>ADAM/Z</strong>
			</Button>
		</div>
	);
}
