import { Fragment } from "react";
import { Zoom } from "react-awesome-reveal";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { RiStackOverflowLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import styles from "../styles/Experience.module.scss";
import Icon from "./Icon";

interface Props {}

const Experience: React.FC<Props> = () => {
	return (
		<Fragment>
			<Container className={`${styles.Experience} px-0`} fluid>
				<div className={styles.box} />
				<Container className="text-white">
					<Row>
						<Col xs={12} lg={6}>
							<div className={styles.typewriterHolder}>
								<Typewriter
									onInit={() => {}}
									options={{
										strings: `Experience`,
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						</Col>
						<div className={`${styles.box} d-block d-lg-none`} />
						<Col xs={12} lg={6}>
							<h2 className="my-4 text-white">
								Enjoys solving problems with clean, scalable solutions and has a genuine passion for learning new things
							</h2>
							<h5 className="text-muted">
								With a strong foundation in Javascript and Typescript, along with some knowledge on other programming
								languages like Python and Dart(Flutter), I use frameworks to improve my projects.
							</h5>
						</Col>
					</Row>
				</Container>
				<div className={styles.box} />
				<hr className="w-100" id="works" />
				<div className={styles.box} />
				<Container className="text-white">
					<Row className="mx-auto text-center">
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="React" iconPath="/react.png" />
						</Col>
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="Next" iconPath="/nextjs.png" />
						</Col>
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="Vue" iconPath="/vue.png" />
						</Col>
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="Node" iconPath="/nodejs.png" />
						</Col>
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="MongoDB" iconPath="/mongodb.png" />
						</Col>
						<Col xs={6} md={2} className="my-3 my-lg-0">
							<Icon title="typescript" iconPath="/typescript.png" />
						</Col>
					</Row>
				</Container>
			</Container>
			<Container className={`${styles.cardContainer}`} fluid>
				<Row>
					<Col xs={12} lg={4}>
						<Zoom>
							<Card className={`${styles.experienceCard} text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className="text-secondary">
											<AiOutlineCode />
										</h1>
										<h4>
											<strong>Back-end</strong>
										</h4>
										<h4>
											<strong>Developer.</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Zoom>
					</Col>
					<Col xs={12} lg={4}>
						<Zoom>
							<Card className={`${styles.experienceCard} bg-secondary text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className="text-white">
											<HiOutlineCode />
										</h1>
										<h4>
											<strong>Front-end</strong>
										</h4>
										<h4>
											<strong>Developer.</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Zoom>
					</Col>
					<Col xs={12} lg={4}>
						<Zoom>
							<Card className={`${styles.experienceCard} text-white mt-3 mt-lg-0 p-4`}>
								<Card.Body>
									<div className={styles.holder}>
										<h1 className="text-secondary">
											<RiStackOverflowLine />
										</h1>
										<h4>
											<strong>Fullstack</strong>
										</h4>
										<h4>
											<strong>Developer.</strong>
										</h4>
									</div>
								</Card.Body>
							</Card>
						</Zoom>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Experience;
