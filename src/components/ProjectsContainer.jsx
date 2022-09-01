import '../styles/components/projectscontainer.sass';

const ProjectsContainer = () => {
	return (
		<section className="projects-container">
			<h2>Projetos</h2>
			<div className="project">
				<h3>Projeto 1</h3>
				<p>
					{' '}
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Vel eius at amet neque, itaque tempore quo est alias. Dicta
					tempora accusantium eius excepturi in voluptatum, et quas
					sequi libero odio?{' '}
				</p>
				<span className="tecnologies-project">
					<h4>Tecnologias: </h4>
					<p>JavaScript</p>
					<p>NodeJS</p>
					<p>ReactJS</p>
				</span>
				<a href="/#" className="btn">
					Ver mais
				</a>
			</div>
			<div className="project">
				<h3>Projeto 2</h3>
				<p>
					{' '}
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Vel eius at amet neque, itaque tempore quo est alias. Dicta
					tempora accusantium eius excepturi in voluptatum, et quas
					sequi libero odio?{' '}
				</p>
				<span className="tecnologies-project">
					<h4>Tecnologias: </h4>
					<p>JavaScript</p>
					<p>NodeJS</p>
					<p>ReactJS</p>
				</span>
				<a href="/#" className="btn">
					Ver mais
				</a>
			</div>
		</section>
	);
};
export default ProjectsContainer;
