import Head from '../components/Head';
import styles from '../styles/Home.module.scss';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head title='Welcome to Patrick&#39;s Portfolio' />
			<Navbar />
			<div style={{ height: '1000px' }} />
			<Reveal keyframes={customAnimation}>
				<div className='text-white text-center mt-5'>
					<h1 className='text-success' id='contact'>
						CONTACT ME
					</h1>
				</div>
			</Reveal>
			<div style={{ height: '1000px' }} />
		</div>
	);
}
