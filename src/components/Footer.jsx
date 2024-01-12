import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const customStyle = {
  backgroundColor: '#946f3a',
};

export default function Footer() {
  return (
    <footer className='fixed-bottom d-flex justify-content-center align-items-center p-3' style={customStyle}>
      <a href="https://github.com/JosueHernand" target='_blank' className='mx-4'>
        <FontAwesomeIcon icon={faGithub} size="3x" className='iconStyle' />
      </a>
      <a href="https://www.linkedin.com/" target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} size="3x" className='iconStyle' />
      </a>
      <a href="https://stackoverflow.com/users/23234683/josue" target='_blank' className='mx-4'>
        <FontAwesomeIcon icon={faStackOverflow} size="3x" className='iconStyle' />
      </a>
    </footer>
  );
}