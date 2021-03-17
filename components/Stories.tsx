import Circle from './Circle';
import { Col, Row, Container } from 'react-bootstrap';
import { Roll } from 'react-awesome-reveal';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { CgMouse } from 'react-icons/cg';

import styles from '../styles/Stories.module.scss';

interface Props {}

const Stories: React.FC<Props> = () => {
	return (
		<Container className={`mt-5 ${styles.Stories}`}>
			<Row>
				<Col xs={12} md={4} lg={4} className='d-flex justify-content-md-end'>
					<Roll>
						<Circle title='Developer' />
					</Roll>
				</Col>
				<Col xs={12} md={3} className='d-none d-lg-block' />
				<Col xs={12} md={8} lg={5} className='mt-5 mt-md-0'>
					<div className='ml-0 ml-md-5'>
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
			<Container fluid className={`${styles.titleContainer}`}>
				<div>
					<h1 className={styles.title}>Patrick</h1>
					<h1 className={`${styles.title} mb-5 mb-md-0`}>
						Duque{' '}
						<span className='text-info'>
							<FaArrowRight />
						</span>
					</h1>
				</div>
				<div className='d-flex'>
					<h5 className='text-muted d-none d-md-flex align-items-center justify-content-center'>
						SCROLL FOR MORE <FaArrowDown />
					</h5>
					<h1 className={`${styles.mouse} text-muted mb-5 mb-md-0 text-right d-inline`}>
						<CgMouse />
					</h1>
				</div>
			</Container>
		</Container>
	);
};

export default Stories;
