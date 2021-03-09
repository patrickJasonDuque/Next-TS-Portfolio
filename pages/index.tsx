import dynamic from 'next/dynamic';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Circle from '../components/Circle';
import BackToTopButton from '../components/BackToTopButton';
import styles from '../styles/Home.module.scss';
import { Fade } from 'react-awesome-reveal';
import { Col, Row, Container } from 'react-bootstrap';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
	return (
		<div className={styles.container} id='home'>
			<BackToTopButton />
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<Container className='mt-5 d-flex justify-content-around'>
				<Circle />
				<div className='ml-5'>
					<p className='text-muted'>/ THIS IS ME</p>
					<h3 className='text-white'>Experienced Developer </h3>
					<h3 className='text-white'>remotely from the Philippines.</h3>
					<p className='text-muted mt-4 mb-1'>A professional & imaginative</p>
					<p className='text-muted my-1'>front-end developer. Loves to add</p>
					<p className='text-muted my-1'>clarity to complicated concepts by design</p>
				</div>
			</Container>
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
