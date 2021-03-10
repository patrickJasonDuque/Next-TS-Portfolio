import { Fragment } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

import styles from '../styles/Contact.module.scss';

interface Props {}

const Contact: React.FC<Props> = () => {
	const handleSendEmail = async () => {
		axios.post('/api/email');
	};

	return (
		<Fragment>
			<Container className={`${styles.Contact} mt-5`}>
				<Row>
					<Col md={8}>
						<h1>Let's - </h1>
						<h1>Connect</h1>
					</Col>
					<Col md={4}>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Contact;
