import { Badge, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Footer.module.scss";
import Name from "./Name";

interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<footer>
			<Container className={`${styles.Footer} text-center mb-5`}>
				<Container>
					<Name />
				</Container>
				<Container className="w-75 d-flex justify-content-around my-4">
					<div className="d-none d-md-block" />
					<div className="d-none d-lg-block" />
					<IconContext.Provider value={{ className: styles.linkedIn, size: "2.5em" }}>
						<Badge pill className={styles.badge}>
							<a target="_blank" href="https://www.linkedin.com/in/patrick-jason-duque-27829a197/">
								<FaLinkedinIn />
							</a>
						</Badge>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: styles.github, size: "2.5em" }}>
						<Badge pill className={styles.badge}>
							<a target="_blank" href="https://github.com/patrickJasonDuque">
								<FaGithub />
							</a>
						</Badge>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: styles.facebook, size: "2.5em" }}>
						<Badge pill className={styles.badge}>
							<a target="_blank" href="https://www.facebook.com/patrickjason.duque.3/">
								<FaFacebookF />
							</a>
						</Badge>
					</IconContext.Provider>
					<div className="d-none d-lg-block" />
					<div className="d-none d-md-block" />
				</Container>

				<p className="text-muted mb-5">&copy; {new Date().getFullYear()} Patrick Jason Duque</p>
			</Container>
		</footer>
	);
};

export default Footer;
