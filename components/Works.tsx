import { Col, Container, Row, Card } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import {
	SiVueDotJs,
	SiNodeDotJs,
	SiMongodb,
	SiVuetify,
	SiNextDotJs,
	SiReact,
	SiTypescript,
	SiBootstrap,
	SiPaypal,
	SiFirebase,
	SiElectron,
	SiUikit,
	SiRedux,
	SiAmazonaws
} from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaStripe } from 'react-icons/fa';
import { JackInTheBox } from 'react-awesome-reveal';

import IconType from '../helpers/Icon';
import { Theme } from '../helpers/ThemeEnum';

import Work from './Work';

import styles from '../styles/Works.module.scss';

interface Project {
	title: string;
	description: JSX.Element;
	image: string;
	websiteLink?: string;
	githubLink: string;
	theme: Theme;
	githubLink2?: string;
}

interface Props {}

const Works: React.FC<Props> = () => {
	const projects: Project[] = [
		{
			title: 'Boots of Travel',
			theme: Theme.DANGER,
			image: './bot.png',
			websiteLink: 'https://boots-of-travel.herokuapp.com/',
			githubLink: 'https://github.com/patrickJasonDuque/B-O-T-vue',
			githubLink2: 'https://github.com/patrickJasonDuque/B-O-T-server',
			description: (
				<Container className='text-white mt-5'>
					<Container>
						<h4>Front-End application</h4>
						<ul>
							<li>
								Done in Vue{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiVueDotJs />
									</span>{' '}
								</h4>
								with Vuex.
							</li>
							<li>Connects to the API server via HTTP (axios).</li>
							<li>
								Use of tools like Vuetify{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiVuetify />
									</span>
								</h4>, Paypal{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiPaypal />
									</span>
								</h4>, and Stripe{' '}
								<h4 className='d-inline'>
									<span className='text-white'>
										<FaStripe />
									</span>.
								</h4>
							</li>
						</ul>
					</Container>
					<Container>
						<h4>Back-End server</h4>
						<ul>
							<li>
								Done in Node{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiNodeDotJs />
									</span>{' '}
								</h4>
								with Express and MongoDB{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiMongodb />
									</span>.
								</h4>
							</li>
							<li>Has HTTP REST API endpoints.</li>
							<li>
								Use of tools like Paypal API{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiPaypal />
									</span>{' '}
								</h4>
								and Stripe API{' '}
								<h4 className='d-inline'>
									<span className='text-white'>
										<FaStripe />
									</span>.
								</h4>
							</li>
						</ul>
					</Container>
				</Container>
			)
		},
		{
			title: 'Tech-Shop',
			theme: Theme.INFO,
			image: './techshop.png',
			websiteLink: 'https://techshop-5h2i9ttcv-patrickjasonduque.vercel.app/',
			githubLink: 'https://github.com/patrickJasonDuque/Next-TS-Shop',
			githubLink2: 'https://github.com/patrickJasonDuque/Node-TS-Proshop',
			description: (
				<Container className='text-white text-left mt-5'>
					<Container>
						<h4>Front-End application</h4>
						<ul>
							<li>
								Done in Next TS{' '}
								<h4 className='d-inline'>
									<span className='text-light'>
										<SiNextDotJs />
									</span>
								</h4>{' '}
								with React{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiReact />
									</span>
								</h4>, Redux{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiRedux />
									</span>
								</h4>{' '}
								and Typescript{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiTypescript />
									</span>
								</h4>
							</li>
							<li>Connects to the API server via HTTP (axios).</li>
							<li>
								Use of tools like React Bootstrap{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiBootstrap />
									</span>{' '}
								</h4>
								, SCSS{' '}
								<h4 className='d-inline'>
									<span className='text-danger'>
										<IoLogoSass />
									</span>{' '}
								</h4>
								, and Paypal{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiPaypal />
									</span>.
								</h4>
							</li>
						</ul>
					</Container>
					<Container>
						<h4>Back-End server</h4>
						<ul>
							<li>
								Done in Node{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiNodeDotJs />
									</span>{' '}
								</h4>
								with Express, Typescript{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiTypescript />
									</span>
								</h4>{' '}
								, and MongoDB{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiMongodb />
									</span>.
								</h4>
							</li>
							<li>Has HTTP REST API endpoints.</li>
							<li>
								Use of tools like Paypal API{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiPaypal />
									</span>{' '}
								</h4>
								and Stripe API{' '}
								<h4 className='d-inline'>
									<span className='text-white'>
										<FaStripe />
									</span>.
								</h4>
							</li>
						</ul>
					</Container>
				</Container>
			)
		},
		{
			title: 'Burger Builder',
			theme: Theme.WARNING,
			image: './burger.png',
			websiteLink: 'https://patrickjasonduque.github.io/Burger',
			githubLink: 'https://github.com/patrickJasonDuque/Burger',
			description: (
				<Container className='text-white'>
					<Container>
						<h4>Front-End application</h4>
						<ul>
							<li>
								Done in React{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiReact />
									</span>
								</h4>{' '}
								and Redux{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiRedux />
									</span>
								</h4>.
							</li>
							<li>
								Connects to the API server via HTTP (axios) and Firebase{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiFirebase />
									</span>
								</h4>
							</li>
							<li>
								Use of SCSS{' '}
								<h4 className='d-inline'>
									<span className='text-danger'>
										<IoLogoSass />
									</span>{' '}
								</h4>.
							</li>
						</ul>
					</Container>
				</Container>
			)
		},
		{
			title: 'Barangay Database',
			theme: Theme.SECONDARY,
			image: './db.png',
			githubLink: 'https://github.com/patrickJasonDuque/barangay-database-frontend',
			githubLink2: 'https://github.com/patrickJasonDuque/barangay-db-backend',
			description: (
				<Container className='text-white text-left mt-5'>
					<Container>
						<h4>Front-End application</h4>
						<ul>
							<li>
								Done in React{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiReact />
									</span>{' '}
								</h4>, Redux{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiRedux />
									</span>
								</h4>{' '}
								and Electron{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiElectron />
									</span>
								</h4>
							</li>
							<li>Connects to the API server via HTTP (axios).</li>
							<li>
								Use of tools like UIKit 3{' '}
								<h4 className='d-inline'>
									<span className='text-info'>
										<SiUikit />
									</span>{' '}
								</h4>
								and SCSS{' '}
								<h4 className='d-inline'>
									<span className='text-danger'>
										<IoLogoSass />
									</span>
								</h4>.
							</li>
						</ul>
					</Container>
					<Container>
						<h4>Back-End server</h4>
						<ul>
							<li>
								Done in Node{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiNodeDotJs />
									</span>{' '}
								</h4>
								with Express, AWS S3{' '}
								<h4 className='d-inline'>
									<span className='text-warning'>
										<SiAmazonaws />
									</span>
								</h4>{' '}
								, and MongoDB{' '}
								<h4 className='d-inline'>
									<span className='text-success'>
										<SiMongodb />
									</span>.
								</h4>
							</li>
							<li>Has HTTP REST API endpoints.</li>
						</ul>
					</Container>
				</Container>
			)
		}
	];

	return (
		<Container className={styles.Works}>
			<Row>
				<div className={`${styles.box}`} />
				<div className={`${styles.box}`} />
				<Col xs={12} lg={6}>
					<p className='text-muted'>
						<strong>/ W O R K S</strong>
					</p>
					<h2 className='mb-0 mt-4 text-white'>Selected works,</h2>
					<h2 className='mt-0 mb-4 text-white'>Sample projects.</h2>
					<p className='text-muted mb-0 mt-4'>Passion for building applications</p>
					<p className='text-muted mt-0 mb-4 '>to test and improve my knowledge.</p>
				</Col>
				<div className={`${styles.box} d-block d-lg-none`} />
				<Col xs={12} lg={6}>
					<div className={styles.typewriterHolder}>
						<Typewriter
							onInit={() => {}}
							options={{
								strings: `Code`,
								autoStart: true,
								loop: true
							}}
						/>
					</div>
				</Col>
			</Row>
			{projects.map((project, i) => (
				<div key={i}>
					<div className={`${styles.box}`} />
					<div className={`${styles.box}`} />
					<JackInTheBox>
						<Work
							title={project.title}
							description={project.description}
							image={project.image}
							theme={project.theme}
							websiteLink={project.websiteLink}
							githubLink={project.githubLink}
							side={i % 2 === 0}
							githubLink2={project.githubLink2}
						/>
					</JackInTheBox>
				</div>
			))}
		</Container>
	);
};

export default Works;
