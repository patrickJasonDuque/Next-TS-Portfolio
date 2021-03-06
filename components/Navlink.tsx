import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { BsDot } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import styles from '../styles/Navlink.module.scss';

interface Props {
	icon: any;
	label: string;
	route: string;
	color: string;
}

const Navlink: React.FC<Props> = ({ icon, label, route, color }) => {
	const router = useRouter();

	let activeColor = useMemo(() => '#7f848b', [ route ]);
	if (router.asPath.includes(route)) activeColor = color;

	return (
		<Nav.Item>
			<Link href={route} passHref>
				<Nav.Link className={styles.active}>
					<h4>
						<IconContext.Provider value={{ color: activeColor, className: 'mr-1' }}>{icon}</IconContext.Provider>
						{label}
						<IconContext.Provider value={{ color: activeColor, size: '1em' }}>
							<BsDot />
						</IconContext.Provider>
					</h4>
				</Nav.Link>
			</Link>
		</Nav.Item>
	);
};

export default Navlink;
