import { useState } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import About from './About/About';
import { Link } from 'react-scroll';

export default function App() {
    window.onscroll = () => {
        let items = document.querySelectorAll('.items');
        items.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 500;
            let height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                sec.classList.add('animation');
            }
            else {
                sec.classList.remove('animation');
            }
        });
    };

    const [mstatus, setmstatus] = useState(false);
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);

    return (
        <div className='background'>
            <header className='header'>
                <h1>AKASH</h1>
                <nav className={`listnav ${mstatus ? 'hidenav' : ''}`}>
                    <ul className={click ? 'active' : ''}>
                        <li><Link className='list' to='home' spy={true} smooth={true} offset={0} duration={0} onClick={closeMenu} >Home</Link></li>
                        <li><Link className='list' to='about' spy={true} smooth={true} offset={0} duration={0} onClick={closeMenu}  >About</Link></li>
                        <li><Link className='list' to='project' spy={true} smooth={true} offset={0} duration={0} onClick={closeMenu} >Project</Link></li>
                        <li><Link className='list' to='skills' spy={true} smooth={true} offset={0} duration={0} onClick={closeMenu} >Skills</Link></li>
                        <li><Link className='list' to='contact' spy={true} smooth={true} offset={0} duration={0} onClick={closeMenu} >Contact</Link></li>
                    </ul>
                </nav>

                <label htmlFor="checkbox">
                    <input type="checkbox" id='checkbox' className='checkbox' onClick={() => setmstatus(!mstatus)} />
                    <div className="toggle">
                        <span className="top-line common"></span>
                        <span className="middle-line common"></span>
                        <span className="bottom-line common"></span>
                    </div>
                </label>
            </header>
            <main className='box'>
                <section className='items home' id='home'><Home /></section>
                <section className='items about' id='about'><About /> </section>
                <section className='items project' id='project'><Project /> </section>
                <section className='items skills' id='skills'><Skills /></section>
                <section className='items contact' id='contact'><Contact /></section>
            </main>
        </div>
    )
}

