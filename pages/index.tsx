import dynamic from 'next/dynamic';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import Contact from '../components/Contact';
import BackToTopButton from '../components/BackToTopButton';

import { Fade } from 'react-awesome-reveal';
import styles from '../styles/Home.module.scss';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container} id='home'>
			<BackToTopButton />
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<Stories />
			<div style={{ height: '1000px' }} />
			<div className='text-white mt-5' id='contact'>
				<div style={{ height: '500px' }} />
				<Fade>
					<Contact />
				</Fade>
			</div>
			<Footer />
		</div>
	);
}
