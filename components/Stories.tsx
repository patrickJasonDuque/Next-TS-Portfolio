import { Fragment } from 'react';
import Circle from './Circle';
import { Col, Row, Container } from 'react-bootstrap';

import styles from '../styles/Stories.module.scss';

interface Props {}

const Stories: React.FC<Props> = () => {
	return (
		<Fragment>
			<Container className={`mt-5 ${styles.Stories}`}>
				<Row>
					<Col xs={12} md={4} className='d-flex justify-content-md-end'>
						<Circle />
					</Col>
					<Col xs={12} md={3} />
					<Col xs={12} md={5} className='mt-5 mt-md-0'>
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
		</Fragment>
	);
};

export default Stories;
