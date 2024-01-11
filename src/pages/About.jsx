import avatar from '../assets/images/avatar.png';

export default function About() {
  return(
    <div className='text-color p-3'>
      <h1 className='mb-4'>About Me</h1>
      <img src={avatar} alt="Josue Hernandez Avatar" className='mb-4' />
      <p className="text-dark-grey d-flex justify-content-end mb-4">
      I'm a dedicated learner and interest in the world of technology. 
      Growing up, I was always interested in technology and gaming which 
      drew me towards the world of computer science. Nowadays I'm living 
      my dream on learning how the enitre world of technology works with 
      all the coding. As much as I enjoy tech, I also like to venture out 
      and find see new places and try out new foods from different places. 
      I'm always willing to try and learn new things since I do like to 
      explore as well. Moreover, I'm excited to combine my interests and 
      expertise on this journey.
      </p>
    </div>
  );
}