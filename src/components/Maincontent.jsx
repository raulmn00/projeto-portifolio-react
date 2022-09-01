import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import HardSkills from './HardSkillsContainer';
import ProjectsContainer from './ProjectsContainer';

const Maincontent = () => {
	return (
		<main id="main-content">
			<AboutContainer />
			<HardSkills />
			<ProjectsContainer />
		</main>
	);
};
export default Maincontent;
