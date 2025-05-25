import './Skills.css'
import html_ic from './html-icon.png';
import css_ic from './css-icon.png';
import js_ic from './javascript-icon.png';
import react_ic from './react-icon.png';
import c_ic from './c++.png';
import java_ic from './java.png'

export default function Skills() {

  return (
    <div className='sk-info'>
      <h1>Skill's</h1>
      <p className='sk-p'>I hereby declare that all the above information given by me is completely true at the best extent of my knowledge.</p>
      <div className='sk-container'>
        <div className='sk-box'>
          <img alt='html' src={c_ic} />
          <h6>C, C++ </h6>
          <p>C programming is a powerful and efficient procedural language known for its simplicity and speed. C++ is a supset of C.</p>
        </div>
        <div className='sk-box'>
          <img alt='html' src={java_ic} />
          <h6>JAVA </h6>
          <p>Java is a high-level, general-purpose, object-oriented programming language.</p>
        </div>
        <div className='sk-box'>
          <img alt='html' src={html_ic} />
          <h6>HTML  </h6>
          <p>HTML, stands for HyperText Markup Language, is a markup language used to structure web content and behavior in web browsers.</p>
        </div>
        <div className='sk-box'>
          <img alt='css' src={css_ic} />
          <h6>CSS</h6>
          <p>CSS, or Cascading Style Sheets, is a style sheet language used for specifying the presentation and styling of a document.</p>
        </div>
        <div className='sk-box'>
          <img alt='js' src={js_ic} />
          <h6>JavaScript </h6>
          <p>JavaScript is a high-level, interpreted programming language that is primarily used to create dynamic features on web pages.</p>
        </div>
        <div className='sk-box'>
          <img alt='react' src={react_ic} />
          <h6>React </h6>
          <p>React.js, commonly known as React, is a free and open-source JavaScript library for building user interfaces (UIs) based on components.</p>
        </div>
      </div>
      
    </div>
  )
}
