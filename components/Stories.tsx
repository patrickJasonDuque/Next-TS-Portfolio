import Circle from './Circle';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Roll } from 'react-awesome-reveal';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { CgMouse } from 'react-icons/cg';

import styles from '../styles/Stories.module.scss';

interface Props {}

const Stories: React.FC<Props> = () => {
	return (
		<Container className={`mt-5 ${styles.Stories}`} id='stories'>
			<Row>
				<Col xs={12} md={4} lg={4} className='d-flex justify-content-md-end'>
					<Roll>
						<Circle title='Developer' />
					</Roll>
				</Col>
				<Col xs={12} md={3} className='d-none d-lg-block' />
				<Col xs={12} md={8} lg={5} className='mt-5 mt-md-0'>
					<div className='ml-0 ml-md-5'>
						<h2 className='text-white'>
							<strong>EXPERIENCED WEB DEVELOPER</strong>
						</h2>
						<h5 className='mt-4 mb-1 text-muted'>
							A professional & imaginative Filipino fullstack developer who loves to add clarity to complicated
							programming concepts and ideas
						</h5>
					</div>
				</Col>
			</Row>
			<Container fluid className={`${styles.titleContainer} mt-2 mt-md-0`}>
				<div>
					<h1 className={styles.title}>Patrick</h1>
					<h1 className={`${styles.title} mb-5 mb-md-0`}>
						Duque{' '}
						<span className='text-info'>
							<FaArrowRight />
						</span>
					</h1>
				</div>
				<div>
					<div className={`${styles.imgContainer} d-none d-md-block mb-5 mr-5`}>
						<Image src='./dp.png' fluid />
					</div>
					<div className='d-flex'>
						<h5 className='text-muted d-none d-md-flex align-items-center justify-content-center'>
							SCROLL FOR MORE <FaArrowDown />
						</h5>
						<h1 className={`${styles.mouse} text-muted mb-5 mb-md-0 text-right d-inline`}>
							<CgMouse />
						</h1>
					</div>
				</div>
			</Container>
		</Container>
	);
};

export default Stories;
