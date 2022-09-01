import '../styles/components/informationcontainer.sass';
import { AiFillEnvironment, AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const InformationContainer = () => {
	return (
		<section id="information-container">
			<div className="info-card">
				<AiOutlineWhatsApp id="phone-icon" />
				<div>
					<h3>WHATSAPP</h3>
					<p>(16)99235-7214</p>
				</div>
			</div>
			<div className="info-card">
				<AiOutlineMail id="email-icon" />
				<div>
					<h3>E-MAIL</h3>
					<p>raul.mariaci@gmail.com</p>
				</div>
			</div>
			<div className="info-card">
				<AiFillEnvironment id="pin-icon" />
				<div>
					<h3>LOCALIZAÇÃO</h3>
					<p>Novo Horizonte / SP</p>
				</div>
			</div>
		</section>
	);
};

export default InformationContainer;
