import './About.css'
import { useState } from 'react';
import img from './akash.JPG';

export default function About() {

  let tabs = [{
    'title': 'About Me',
    'description':
      <div className="about-me">
        <p>My name is Akash Madavi, I am from Nagpur, I have completed my BCA degree from K.R. Pandav College. My hobbies are playing cricket, playing video games, surfing the internet and doing morning exercise. <br />
          <br />I have experience as a frontend developer for web design and app design. I can help you in your new project in web designing and app design. I want to learn to create more projects in future so that I can help in bigger projects in future. <br />
          <br />Using my interpersonal skills to achieve company goals while focusing on customer satisfaction and customer experience. I want to fulfill every need of the customer. <br />
          <br />I have created many basic projects in which I have used all my skills like news website, weather forecast, user forms, games and many other projects. Other projects are on my GitHub and I contribute on daily basis on these GitHub please check once.
        </p>
      </div>
  },
  {
    'title': 'Personal details',
    'description':
      <div className="personal-d">
        <h6>Name <span> : Akash Madavi</span></h6>
        <h6>Father Name <span>: Shankar Madavi</span></h6>
        <h6>Date of Birth <span> : 18/03/2001</span> </h6>
        <h6>Gender <span> : Male</span></h6>
        <h6>Marital Status <span> : Unmarried</span></h6>
        <h6>Nationality <span> : Indian</span></h6>
        <h6>Language <span> : English, Hindi</span></h6>
        <h6>Email I'd <span> : akashmadavi2001@gmail.com</span></h6>
        <h6>Address <span> : Nagpur</span></h6>
        <h6>Contact No <span> : 9021232883</span></h6>
      </div>
  }]

  let [activeTabs, setactiveTabs] = useState(0);
  let [activecontent, setactivecontent] = useState(tabs[0]);
  let changeData = (index) => {
    setactiveTabs(index);
    setactivecontent(tabs[index]);
  }

  return (
    <div className='a-container'>
      <div className="profile">
        <h3>It's Me</h3>
        <div className="img">
          <img src={img} alt="img" />
        </div>
      </div>
      <div className='detail'>
        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li key={index} onClick={() => changeData(index)} className={activeTabs === index ? 'btns' : ''}>{tabsItems.title}</li>
            )
          })}
        </ul>
        {activecontent !== undefined ? <div >{activecontent.description}</div> : ''}
      </div>
    </div>
  )
}