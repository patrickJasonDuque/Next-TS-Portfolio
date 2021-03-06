import dynamic from 'next/dynamic';

import Head from '../components/Head';
import styles from '../styles/Home.module.scss';
import { Fade } from 'react-awesome-reveal';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container}>
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<div style={{ height: '1000px' }} />
			<div className='text-white text-center mt-5' id='contact'>
				<div style={{ height: '500px' }} />
				<Fade>
					<p>I will gently appear as I enter the viewport</p>
				</Fade>
			</div>
			<div style={{ height: '1000px' }} />
		</div>
	);
}
