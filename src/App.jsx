import { useState } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import About from './About/About';

export default function App() {
    window.onscroll = () => {
        let items = document.querySelectorAll('.items');
        items.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 500;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                sec.classList.add('animation');
                document.querySelectorAll('.header a').forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('a[href*=' + id + ']')?.classList.add('active');
                });
            }
            else {
                sec.classList.remove('animation');
            }
        });
    };

    const [mstatus, setmstatus] = useState(false);

    return (
        <div className='background'>
            <header className='header'>
                <h1>AKASH</h1>
                <nav className={`listnav ${mstatus ? 'hidenav' : ''}`}>
                    <ul>
                        <li><a href='#home' className='active'>Home</a></li>
                        <li><a href='#about' >About</a></li>
                        <li><a href='#project' >Project</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#contact' >Contact</a></li>
                    </ul>
                </nav>

                <label htmlFor="checkbox"  >
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

