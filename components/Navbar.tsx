import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiFace, BiHdd, BiMailSend } from "react-icons/bi";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Name from "./Name";
import Navlink from "./Navlink";

interface Props {}

const NavBar: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header>
			<Container className="mt-5">
				<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} as="h3" className="menu">
						{isOpen ? <ImMenu4 /> : <ImMenu3 />}
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Navlink icon={<BiFace />} label="STORIES" route="#stories" color="#676cdb" />
							<Navlink icon={<BiHdd />} label="WORKS" route="#works" color="#f1b457" />
							<Navlink icon={<BiMailSend />} label="CONTACT" route="#contact" color="#75bd53" />
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand href="#home">
						<Name />
					</Navbar.Brand>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
