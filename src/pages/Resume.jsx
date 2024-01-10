import myResume from '../../assets/pdf/Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Download My
      <a href={myResume} download='Resume.pdf'> Resume</a>
      </p>

      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

    </div>
  )
}