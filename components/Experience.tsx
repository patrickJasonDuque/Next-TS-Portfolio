import { Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { Zoom } from 'react-awesome-reveal';
import { AiOutlineCode } from 'react-icons/ai';
import { HiOutlineCode } from 'react-icons/hi';

import Icon from './Icon';

import styles from '../styles/Experience.module.scss';

interface Props {}

const Experience: React.FC<Props> = () => {
	return (
		<Fragment>
			<Container className={`${styles.Experience} px-0`} fluid id='works'>
				<div className={styles.box} />
				<Container className='text-white'>
					<Row>
						<Col xs={12} lg={6}>
							<div className={styles.typewriterHolder}>
								<Typewriter
									onInit={() => {}}
									options={{
										strings: `Experience`,
										autoStart: true,
										loop: true
									}}
								/>
							</div>
						</Col>
						<div className={`${styles.box} d-block d-lg-none`} />
						<Col xs={12} lg={6}>
							<p className='text-muted'>
								<strong>/ PROBLEM SOLVER</strong>
							</p>
							<h2 className='my-4'>
								I enjoy solving problems with clean scalable solutions. I have a genuine passion for learning new
								things.
							</h2>
							<p className='text-muted'>
								I have a strong foundation in Javascript and Typescript. I use frameworks to improve my work. I have
								some knowledge with some other programming languages like Python and Dart(Flutter).
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
							<Icon title='Node' iconPath='/nodejs.png' />
						</Col>
						<Col xs={6} md={2} className='my-3 my-lg-0'>
							<Icon title='MongoDB' iconPath='/mongodb.png' />
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
			</Container>
			<Container className={`${styles.cardContainer}`} fluid>
				<Zoom>
					<Row>
						<Col xs={12} lg={4}>
							<Card className={`${styles.experienceCard} text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className='text-secondary'>
											<AiOutlineCode />
										</h1>
										<h4>
											<strong>Back-end</strong>
										</h4>
										<h4>
											<strong>Developer.</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} lg={4}>
							<Card className={`${styles.experienceCard} bg-secondary text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className='text-white'>
											<HiOutlineCode />
										</h1>
										<h4>
											<strong>Front-end</strong>
										</h4>
										<h4>
											<strong>Developer.</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} lg={4}>
							<Card className={`${styles.experienceCard} text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className='text-secondary'>
											<AiOutlineCode />
										</h1>
										<h4>
											<strong>Back-end</strong>
										</h4>
										<h4>
											<strong>Developer .</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Zoom>
			</Container>
		</Fragment>
	);
};

export default Experience;
