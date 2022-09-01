import avatar from '../imgs/foto-perfil.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
	return (
		<aside id="sidebar">
			<img src={avatar} alt="raul mariaci neto" />
			<p className="title-dev">Desenvolvedor FullStack</p>
			<p>Redes sociais</p>
			<p>Informações de contato: </p>
			<a href="/#" className="btn">
				Download Currículo
			</a>
		</aside>
	);
};
export default Sidebar;
