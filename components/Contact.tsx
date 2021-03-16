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
			<Container className={`${styles.Contact} mt-5`} id='contact'>
				<Row>
					<Col xs={12} lg={8}>
						<h1 className={styles.header}>
							Let's
							<span className='text-info ml-2'>
								<FaArrowRight />
							</span>
						</h1>
						<h1 className={styles.header}>Connect.</h1>
						<Col md={8}>
							<p className='text-muted'>
								Patrick Jason Duque is a professional Typescript developer, who uses framework such as{' '}
								<span className='text-info'>React</span>, <span className='text-success'>Vue</span>, and
								<span className='text-warning'> Express</span>. Loves to add clarity to complicated concepts of
								programming.
							</p>
						</Col>
						<Container className='d-flex justify-content-end my-5'>
							<Roll>
								<Circle title='Open for new project.' />
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
