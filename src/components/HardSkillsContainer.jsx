import '../styles/components/hardskills.sass';
import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiNodejsSmall,
	DiMysql,
	DiReact,
} from 'react-icons/di';

const technologies = [
	{
		id: 'html',
		name: 'HTML5',
		icon: <DiHtml5 />,
		description:
			'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. ',
	},
	{
		id: 'css',
		name: 'CSS3',
		icon: <DiCss3 />,
		description:
			'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>.',
	},
	{
		id: 'js',
		name: 'JavaScript',
		icon: <DiJsBadge />,
		description:
			'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
	},
	{
		id: 'node',
		name: 'Node.js',
		icon: <DiNodejsSmall />,
		description:
			'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
	},
	{
		id: 'mysql',
		name: 'MySQL',
		icon: <DiMysql />,
		description:
			'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.',
	},
	{
		id: 'react',
		name: 'React',
		icon: <DiReact />,
		description:
			'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.',
	},
];

const HardSkills = () => {
	return (
		<section className="technologies-container">
			<h2>Tecnologias</h2>
			<div className="technologies-grid">
				{technologies.map((tech) => (
					<div className="technology-card" id={tech.id} key={tech.id}>
						{tech.icon}
						<div className="technology-info">
							<h3>{tech.name}</h3>
							<p>{tech.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default HardSkills;
