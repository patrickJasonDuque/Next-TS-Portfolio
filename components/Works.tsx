import { Col, Container, Row, Card } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { JackInTheBox } from 'react-awesome-reveal';

import IconType from '../helpers/Icon';
import { Theme } from '../helpers/ThemeEnum';

import Work from './Work';

import styles from '../styles/Works.module.scss';

interface Project {
	title: string;
	workIcons: IconType[];
	image: string;
	websiteLink?: string;
	githubLink: string;
	theme: Theme;
}

interface Props {}

const Works: React.FC<Props> = () => {
	const projects: Project[] = [
		{
			title: 'Boots of Travel',
			workIcons: [
				{ title: 'Vue', path: './vue.png' },
				{ title: 'Node', path: './nodejs.png' },
				{ title: 'MongoDB', path: './mongodb.png' }
			],
			theme: Theme.DANGER,
			image: './bot.png',
			websiteLink: 'https://boots-of-travel.herokuapp.com/',
			githubLink: 'https://github.com/patrickJasonDuque/B-O-T-vue'
		},
		{
			title: 'Tech-Shop',
			workIcons: [
				{ title: 'React', path: './react.png' },
				{ title: 'Next', path: './nextjs.png' },
				{ title: 'Node', path: './nodejs.png' },
				{ title: 'MongoDB', path: './mongodb.png' }
			],
			theme: Theme.INFO,
			image: './techshop.png',
			websiteLink: 'https://techshop.vercel.app/',
			githubLink: 'https://github.com/patrickJasonDuque/Next-TS-Shop'
		},
		{
			title: 'Burger Builder',
			workIcons: [ { title: 'React', path: './react.png' }, { title: 'Firebase', path: './firebase.png' } ],
			theme: Theme.WARNING,
			image: './burger.png',
			websiteLink: 'https://patrickjasonduque.github.io/Burger',
			githubLink: 'https://github.com/patrickJasonDuque/Burger'
		},
		{
			title: 'Barangay Database',
			workIcons: [ { title: 'React', path: './react.png' }, { title: 'Node', path: './nodejs.png' } ],
			theme: Theme.SECONDARY,
			image: './db.jpg',
			githubLink: 'https://github.com/patrickJasonDuque/barangay-database-frontend'
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
							workIcons={project.workIcons}
							image={project.image}
							theme={project.theme}
							websiteLink={project.websiteLink}
							githubLink={project.githubLink}
							side={i % 2 === 0}
						/>
					</JackInTheBox>
				</div>
			))}
		</Container>
	);
};

export default Works;
