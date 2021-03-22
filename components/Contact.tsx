import { Fragment } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import ContactForm from './ContactForm';
import Circle from './Circle';
import { Roll } from 'react-awesome-reveal';

import styles from '../styles/Contact.module.scss';

interface Props {}

const Contact: React.FC<Props> = () => {
	return (
		<Fragment>
			<Container className={`${styles.Contact} p-1 p-lg-5 mb-0 my-5`} id='contact'>
				<Row>
					<Col xs={12} lg={8}>
						<h1 className={`${styles.header} d-flex`}>
							Let's
							<div className={`${styles.arrow} text-info ml-2`}>
								<FaArrowRight />
							</div>
						</h1>
						<h1 className={styles.header}>Connect</h1>
						<Col md={8}>
							<p className='text-muted'>
								Patrick Jason Duque is a professional Typescript developer, that loves to add clarity to complicated
								concepts of programming through framework like <span className='text-info'>React</span>,{' '}
								<span className='text-success'>Vue</span>, and
								<span className='text-warning'> Express</span>.
							</p>
						</Col>
						<Container className='d-flex justify-content-end my-5'>
							<Roll>
								<Circle title='Open for a new project' />
							</Roll>
							<div className='w-25 d-none d-lg-block' />
						</Container>
					</Col>
					<Col xs={12} lg={4}>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Contact;
