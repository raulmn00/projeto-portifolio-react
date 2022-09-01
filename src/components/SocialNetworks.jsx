import '../styles/components/SocialNetwork.sass';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const arraySocial = [
	{
		name: 'linkedin',
		icon: <FaLinkedin />,
		link: 'https://www.linkedin.com/in/raul-mariaci-neto/',
	},
	{
		name: 'github',
		icon: <FaGithub />,
		link: 'https://github.com/raulmn00',
	},
];

const SocialNetwork = () => {
	return (
		<section id="social-networks">
			{arraySocial.map((network) => (
				<a
					href={network.link}
					className="social-btn"
					id={network.name}
					key={network.name}
				>
					{network.icon}
				</a>
			))}
		</section>
	);
};

export default SocialNetwork;
