import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const customStyle = {
  backgroundColor: '#946f3a',
};

export default function Footer() {
  return (
    <footer className='fixed-bottom d-flex justify-content-center align-items-center p-3' style={customStyle}>
      <a href="https://github.com/JosueHernand"target='_blank'>
        <FontAwesomeIcon icon={faGithub} 
        size="3x" className='iconStyle githubIcon'/>
      </a>
    </footer>
  );
}