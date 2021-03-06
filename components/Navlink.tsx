import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { BsDot } from 'react-icons/bs';
import { IconContext } from 'react-icons';

interface Props {
	icon: any;
	label: string;
	route: string;
}

const Navlink: React.FC<Props> = ({ icon, label, route }) => {
	const router = useRouter();

	let color = useMemo(() => '#7f848b', [ route ]);
	if (router.asPath.includes(route)) color = '#ffffff';

	return (
		<Nav.Item>
			<Link href={route} passHref>
				<Nav.Link>
					<h4>
						<IconContext.Provider value={{ color: color, className: 'mr-1' }}>{icon}</IconContext.Provider>
						{label}
						<IconContext.Provider value={{ color: color, size: '1em' }}>
							<BsDot />
						</IconContext.Provider>
					</h4>
				</Nav.Link>
			</Link>
		</Nav.Item>
	);
};

export default Navlink;
