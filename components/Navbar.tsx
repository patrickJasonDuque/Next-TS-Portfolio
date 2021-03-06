import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiMailSend, BiFace, BiHdd } from 'react-icons/bi';

import Navlink from './Navlink';

import styles from '../styles/Navbar.module.scss';

interface Props {}

const NavBar: React.FC<Props> = () => {
	return (
		<header>
			<Container className='mt-5'>
				<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<Navlink icon={<BiFace />} label='STORIES' route='#stories' color='#676cdb' />
							<Navlink icon={<BiHdd />} label='WORKS' route='#works' color='#f1b457' />
							<Navlink icon={<BiMailSend />} label='CONTACT' route='#contact' color='#75bd53' />
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand href='#home'>
						<h3>
							P A T R I C K <span className={styles.slash}>/</span> <span className={styles.lastName}>D</span>
						</h3>
					</Navbar.Brand>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
