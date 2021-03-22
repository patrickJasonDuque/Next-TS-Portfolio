import dynamic from 'next/dynamic';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Stories from '../components/Stories';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Works from '../components/Works';
import BackToTopButton from '../components/BackToTopButton';

import { Fade, Slide } from 'react-awesome-reveal';
import styles from '../styles/Home.module.scss';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container} id='home'>
			<BackToTopButton />
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<Stories />
			<Fade>
				<Experience />
			</Fade>
			<Works />
			<div style={{ height: '10vh' }} />
			<hr />
			<div className={styles.wrapper}>
				<Slide>
					<Contact />
					<Footer />
				</Slide>
			</div>
		</div>
	);
}
