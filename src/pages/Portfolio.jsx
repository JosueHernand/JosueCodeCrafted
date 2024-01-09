import Project from "../components/Project"

export default function Portfolio() {
  const websites = [
    {
      id: 1,
      title: 'ex',
      link: 'ex',
      archive: 'ex',
      image: 'ex',
    },
  ]

  return (
    <div>
      <h1>Portfolio</h1>
      {websites.map((task) => (
        <Project task={task} key={task.id} />
      ))}
    </div>
  );
}