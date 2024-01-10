export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={require ('../../assets/pdf/Resume.pdf')} download='Resune.pdf'>
        <h2>Download My Resume</h2>
      </a>

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