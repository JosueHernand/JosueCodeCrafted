import Project from "../components/Project"
import ReelMeal from "../assets/images/reelmeal.png"
import EzBank from "../assets/images/ezbank.png"
import WebFlowText from "../assets/images/jate.png"
import Passlock from "../assets/images/passlock.png"
import WeatherTracker from "../assets/images/weatherapp.png"
import CalendarApp from "../assets/images/calendarapp.png"

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
    {
      id: 3,
      title: 'WebFlowText',
      link: 'https://webflowtext.onrender.com/',
      archive: 'https://github.com/JosueHernand/WebFlowText',
      image: WebFlowText,
    },
    {
      id: 4,
      title: 'Passlock',
      link: 'https://josuehernand.github.io/PassLock/',
      archive: 'https://github.com/JosueHernand/PassLock',
      image: Passlock,
    },
    {
      id: 5,
      title: 'Weather Tracker',
      link: 'https://josuehernand.github.io/WeatherTracker/',
      archive: 'https://github.com/JosueHernand/WeatherTracker',
      image: WeatherTracker,
    },
    {
      id: 6,
      title: 'Calender App',
      link: 'https://josuehernand.github.io/CalendarApp/',
      archive: 'https://github.com/JosueHernand/CalendarApp',
      image: CalendarApp,
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