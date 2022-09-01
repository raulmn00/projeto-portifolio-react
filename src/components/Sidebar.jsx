import '../styles/components/sidebar.sass';
import avatar from '../imgs/foto-perfil.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
	return (
		<aside id="sidebar">
			<img src={avatar} alt="raul mariaci neto" />
			<p className="title-dev">Desenvolvedor FullStack</p>
			<SocialNetworks />
			<InformationContainer />
			<a href="/#" className="btn">
				Download Currículo
			</a>
		</aside>
	);
};
export default Sidebar;
