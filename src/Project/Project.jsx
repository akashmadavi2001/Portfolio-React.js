import './Project.css'
import calculator from './Calculator.jpg'
import game from './game.png'
import weather from './weather.jpg'
import to_do from './To-do.jpg'
import userform from './userform.jpg'
import project from './project.jpg'

export default function Project() {

  return (
    <div className='pro-container'>
      <h3 className='pro-h3'>Mini Project</h3>
      <p className='pro-p'>This is my own experience with this project based on which I have created these.</p>
      <div className='pro'>
        <a href="https://akashmadavi2001.github.io/Rock-Paper-Scissors-game/" className='pro-box'>
          <h5>Game</h5>
          <p>Enjoy and have fun playing Rock Paper and Scissors game in basic programming languages ​​like HTML, CSS, JavaScript.</p>
          <img src={game} alt='email' />
        </a>
        <a href="https://akashmadavi2001.github.io/UserForm-React.js/" className='pro-box'>
          <h5>UserForm</h5>
          <p>A userform is an object that represents a window or dialog box within the user interface of an application. It is used to collect input data from the user or to display information to the user. </p>
          <img src={userform} alt='userform' />
        </a>
        <a href="https://akashmadavi2001.github.io/Weather-React.js/" className='pro-box'>
          <h5>Weather</h5>
          <p>Weather refers href the atmospheric conditions in a specific place at a particular time and including temperature.</p>
          <img src={weather} alt='weather' />
        </a>
        <a href="https://akashmadavi2001.github.io/To-Do-List-React.js/" className='pro-box'>
          <h5>To-do</h5>
          <p>A href-do list is a simple list of tasks or activities that need href be completed.</p>
          <img src={to_do} alt='href-do' />
        </a>
        <a href="https://akashmadavi2001.github.io/Calculator-React.js/" className='pro-box'>
          <h5>Calculator</h5>
          <p>A calculator is an electronic device or software used href perform mathematical calculations.</p>
          <img src={calculator} alt='calculator' />
        </a>
        <a href="https://github.com/akashmadavi2001" className='pro-box'>
          <h5>More Projects</h5>
          <p>I have other projects uploaded on my GitHub. Like Html, CSS, Javascript and React.js projects.</p>
          <img src={project} alt='moreproject' />
        </a>
      </div>
    </div>
  )
}