import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiMailSend, BiFace, BiHdd } from 'react-icons/bi';

import Navlink from './Navlink';

interface Props {}

const NavBar: React.FC<Props> = () => {
	return (
		<header>
			<Container className='mt-5'>
				<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<Navlink icon={<BiFace />} label='Stories' route='#stories' />
							<Navlink icon={<BiHdd />} label='Works' route='#works' />
							<Navlink icon={<BiMailSend />} label='Contact' route='#contact' />
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand href='#home'>
						<h3>
							P A T R I C K <strong className='text-info'>/</strong> D
						</h3>
					</Navbar.Brand>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
