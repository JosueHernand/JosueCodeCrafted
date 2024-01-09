import Project from "../components/Project"
import ReelMeal from "../../assets/images/reelmeal.png"
import EzBank from "../../assets/images/ezbank.png"

export default function Portfolio() {
  const websites = [
    {
      id: 1,
      title: 'EzBank',
      link: 'https://ezbank-6a5a197718d2.herokuapp.com/homepage',
      archive: 'https://github.com/Raymond2811/EzBank',
      image: EzBank,
    },
    {
      id: 2,
      title: 'ReelMeal',
      link: 'https://gsandman8.github.io/ReelAndMeal/',
      archive:'https://github.com/Gsandman8/ReelAndMeal',
      image: ReelMeal,
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