import dynamic from 'next/dynamic';

import Head from '../components/Head';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import styles from '../styles/Home.module.scss';
import { Fade } from 'react-awesome-reveal';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container} id='home'>
			<BackToTopButton />
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<div style={{ height: '1000px' }} />
			<div className='text-white text-center mt-5' id='contact'>
				<div style={{ height: '500px' }} />
				<Fade>
					<h1 className='text-success'>Contact Me</h1>
				</Fade>
			</div>
			<div style={{ height: '1000px' }} />
			<Footer />
		</div>
	);
}
