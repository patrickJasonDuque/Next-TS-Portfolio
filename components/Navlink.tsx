import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { BsDot } from 'react-icons/bs';
import { IconContext } from 'react-icons';

interface Props {
	icon: JSX.Element;
	label: string;
	route: string;
	color: string;
}

const Navlink: React.FC<Props> = ({ icon, label, route, color }) => {
	const router = useRouter();

	let active = false;
	if (router.asPath.substring(1) === route) {
		active = true;
	}

	return (
		<Nav.Item>
			<Link href={route} passHref>
				<Nav.Link>
					<h4>
						<IconContext.Provider value={{ color: active ? color : '#7f848b', className: 'mr-1' }}>
							{icon}
						</IconContext.Provider>
						{label}
						<IconContext.Provider value={{ color: active ? color : '#7f848b', size: '1em' }}>
							<BsDot />
						</IconContext.Provider>
					</h4>
				</Nav.Link>
			</Link>
		</Nav.Item>
	);
};

export default Navlink;
