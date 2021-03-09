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
			<Container className='mt-5'>
				<Row>
					<Col xs={12} md={6} className='d-flex justify-content-xs-end justify-content-md-center'>
						<Circle />
					</Col>
					<Col xs={12} md={6} lg={4} className='mt-sm-5 mt-md-0'>
						<div className='ml-5'>
							<p className='text-muted'>
								<strong>/ THIS IS ME</strong>
							</p>
							<h3 className='text-white'>Experienced Developer remotely from the Philippines.</h3>
							<p className='text-muted mt-4 mb-1'>
								A professional & imaginative front-end developer. Loves to add clarity to complicated concepts by design
							</p>
						</div>
					</Col>
				</Row>
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
