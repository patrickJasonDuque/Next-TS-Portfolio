import { SiNextDotJs, SiReact, SiVueDotJs, SiNodeDotJs, SiMongodb, SiSass } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { Col, Container, Row } from 'react-bootstrap';

import Icon from './Icon';

import styles from '../styles/Experience.module.scss';

interface Props {}

const Experience: React.FC<Props> = () => {
	return (
		<Container className={`${styles.Experience} px-0`} fluid>
			<div className={styles.box} />
			<Container className='text-white'>
				<Row>
					<Col xs={12} md={4} lg={6}>
						Experience
					</Col>
					<Col xs={12} md={8} lg={6}>
						<p className='text-muted'>
							<strong>/ PROBLEM SOLVER</strong>
						</p>
						<h2 className='my-4'>
							I enjoy solving problems with clean scalable solutions. I have a genuine passion for learning new things.
						</h2>
						<p className='text-muted'>
							I have a strong foundation in Javascript and Typescript. I use frameworks to improve my work. I have some
							knowledge with some other programming languages like Python and Dart(Flutter).
						</p>
					</Col>
				</Row>
			</Container>
			<div className={styles.box} />
			<hr className='w-100' />
			<div className={styles.box} />
			<Container className='text-white'>
				<Row className='mx-auto text-center'>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='React' iconPath='/react.png' />
					</Col>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='Next' iconPath='/nextjs.png' />
					</Col>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='Sass' iconPath='/sass.png' />
					</Col>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='Vue' iconPath='/vue.png' />
					</Col>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='typescript' iconPath='/typescript.png' />
					</Col>
					<Col xs={6} md={2} className='my-3 my-lg-0'>
						<Icon title='python' iconPath='/python.png' />
					</Col>
				</Row>
			</Container>
			<div className={styles.box} />
		</Container>
	);
};

export default Experience;
