import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiMailSend, BiFace, BiHdd } from 'react-icons/bi';

import Navlink from './Navlink';
import Name from './Name';

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
						<Name />
					</Navbar.Brand>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
