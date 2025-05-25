import img1 from './Akash.png';
import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {

    return (
        <div className='h-container'>
            <motion.div
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: "all" }}
                transition={{ duration: 0.5 }}
                className='info'>
                <h1><span>Hi,</span> <span>I'm</span> <span>Akash</span> <span>Madavi</span> </h1>
                <h3><span>Frontend</span> <span>Developer</span></h3>
                <p>To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.</p>
                <a href='#contact'>
                    <button> Hire Me</button>
                </a>
                <nav className='navlist-ico'>
                    <ul>
                        <li className="list active"><i className="fi fi-brands-facebook"></i></li>
                        <li className="list"><i className="fi fi-brands-whatsapp"></i></li>
                        <li className="list"><i className="fi fi-brands-instagram"></i></li>
                        <li className="list"><i className="fi fi-brands-github"></i></li>
                    </ul>
                </nav>
            </motion.div>
            <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: "all" }}
                transition={{ duration: 0.5 }}
                className='info2'>
                <img src={img1} alt="img" />
            </motion.div>
            <div className="waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    )
}
