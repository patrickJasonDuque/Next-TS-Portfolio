import { JackInTheBox, Slide } from "react-awesome-reveal";
import { Badge, Col, Image, Row } from "react-bootstrap";
import { IoIosGlobe } from "react-icons/io";
import { VscGithubAlt, VscGithubInverted } from "react-icons/vsc";
import { Theme } from "../helpers/ThemeEnum";
import styles from "../styles/Work.module.scss";

interface Props {
	title: string;
	image: string;
	theme: Theme;
	side?: boolean;
	websiteLink?: string;
	githubLink: string;
	githubLink2?: string;
	description: JSX.Element;
}

const Work: React.FC<Props> = ({ title, image, theme, side, websiteLink, githubLink, githubLink2, description }) => {
	return (
		<Row className={styles.Work}>
			<Col xs={12} lg={4} className={`${styles.description} ${side && "order-1 order-lg-2"}`}>
				<Slide>
					<div className={`text-left ${side ? "text-lg-left" : "text-lg-right"}`}>
						<div className={`${side ? "text-right" : "text-left"} my-4 my-md-0`}>
							<Badge variant={theme} pill className="p-3">
								<h4 className="text-white">{title}</h4>
							</Badge>
						</div>
						<div className="mt-3">{description}</div>
					</div>
					<div>
						<div className="d-flex justify-content-around mt-5">
							{websiteLink && (
								<Badge pill variant={theme} className="px-3">
									<a
										target="_blank"
										className="text-dark d-flex align-items-center justify-content-center"
										href={websiteLink}>
										<h1 className="d-inline">
											<IoIosGlobe />
										</h1>
									</a>
								</Badge>
							)}
							<Badge pill variant={theme} className="px-3">
								<a
									target="_blank"
									className="text-dark d-flex align-items-center justify-content-center"
									href={githubLink}>
									<h1 className="d-inline">
										<VscGithubAlt />
									</h1>
								</a>
							</Badge>
							{githubLink2 && (
								<Badge pill variant={theme} className="px-3">
									<a
										target="_blank"
										className="text-dark d-flex align-items-center justify-content-center"
										href={githubLink2}>
										<h1 className="d-inline">
											<VscGithubInverted />
										</h1>
									</a>
								</Badge>
							)}
						</div>
					</div>
				</Slide>
			</Col>
			<Col xs={12} lg={8} className={`${side && "order-2 order-lg-1"} mt-5 mt-md-0`}>
				<JackInTheBox>
					<Image src={image} fluid className={styles.workImage} />
				</JackInTheBox>
			</Col>
		</Row>
	);
};

export default Work;
