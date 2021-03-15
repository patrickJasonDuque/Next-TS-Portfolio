import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Container, Modal, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { HiArrowRight } from 'react-icons/hi';

import styles from '../styles/ContactForm.module.scss';

interface Props {}

interface ContactFormData {
	name: string;
	email: string;
	text: string;
}

const validateEmail = (email: string) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const ContactForm: React.FC<Props> = () => {
	const [ error, setError ] = useState<string>(null);
	const [ success, setSuccess ] = useState<string>(null);
	const [ loading, setLoading ] = useState<boolean>(false);
	const { register, handleSubmit, setValue } = useForm();

	const handleSubmitForm = async (data: ContactFormData) => {
		setError(null);
		setSuccess(null);
		if (!data.email || !validateEmail(data.email)) {
			setError('Please add a valid email.');
		} else if (!data.name) {
			setError('Please add your name 😊.');
		} else if (!data.text) {
			setError('What would you like to tell me? 🤔.');
		} else {
			setLoading(true);
			try {
				const message = (await axios.post('/api/email', { name: data.name, email: data.email, text: data.text })).data;
				setSuccess(message.message as string);
				setValue('name', '');
				setValue('email', '');
				setValue('text', '');
			} catch (error) {
				setError('Something went wrong, Please try again later 😢.');
			}
			setLoading(false);
		}
	};

	return (
		<Container className={`${styles.ContactForm}`}>
			<Modal show={loading} centered>
				<Modal.Body style={{ height: '200px' }} className='bg-primary d-flex justify-content-center align-items-center'>
					<Spinner animation='border' variant='light' />
				</Modal.Body>
			</Modal>
			<Form onSubmit={handleSubmit(handleSubmitForm)}>
				{error && <p className='text-danger'>{error}</p>}

				<Form.Group controlId='contactEmail'>
					<Form.Label className={`${styles.label}`}>Your email address:</Form.Label>
					<Form.Control type='email' name='email' ref={register()} />
					<Form.Text className='text-muted'>I'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId='contactName'>
					<Form.Label className={`${styles.label}`}>Your name:</Form.Label>
					<Form.Control type='text' name='name' ref={register()} />
				</Form.Group>

				<Form.Group controlId='contactText'>
					<Form.Label className={`${styles.label}`}>About the project:</Form.Label>
					<Form.Control type='text' name='text' ref={register()} />
				</Form.Group>

				<Button type='submit' variant='outline-info' className={`${styles.button} p-0 my-3`} size='lg'>
					<strong>Send</strong> <HiArrowRight />
				</Button>

				{success && <p className='text-success mt-4'>{success}</p>}
			</Form>
		</Container>
	);
};

export default ContactForm;
