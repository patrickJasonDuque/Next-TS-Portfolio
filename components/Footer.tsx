import { Container, Row, Col, Badge } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

import Name from './Name';

import styles from '../styles/Footer.module.scss';

interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<footer>
			<Container className='text-center mb-5'>
				<Container className='mb-4'>
					<Name />
				</Container>
				<Container className='w-50'>
					<Row className='mb-4'>
						<Col sm={3} />
						<Col xs={4} md={2}>
							<IconContext.Provider value={{ className: styles.linkedIn, size: '2.5em' }}>
								<Badge pill className={styles.badge}>
									<a target='_blank' href='https://www.linkedin.com/in/patrick-jason-duque-27829a197/'>
										<FaLinkedinIn />
									</a>
								</Badge>
							</IconContext.Provider>
						</Col>
						<Col xs={4} md={2}>
							<IconContext.Provider value={{ className: styles.github, size: '2.5em' }}>
								<Badge pill className={styles.badge}>
									<a target='_blank' href='https://github.com/patrickJasonDuque'>
										<FaGithub />
									</a>
								</Badge>
							</IconContext.Provider>
						</Col>
						<Col xs={4} md={2}>
							<IconContext.Provider value={{ className: styles.facebook, size: '2.5em' }}>
								<Badge pill className={styles.badge}>
									<a target='_blank' href='https://www.facebook.com/patrickjason.duque.3/'>
										<FaFacebookF />
									</a>
								</Badge>
							</IconContext.Provider>
						</Col>
						<Col sm={3} />
					</Row>
				</Container>

				<p className='text-muted mb-5'>&copy; {new Date().getFullYear()} Patrick Jason Duque</p>
			</Container>
		</footer>
	);
};

export default Footer;
