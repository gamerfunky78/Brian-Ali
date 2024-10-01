import IMG from './assets/image.png';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faToggleOff, faToggleOn, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Herosection() {
    const texts = ["Web developer.", 'Front-end Developer.', 'Freelance Developer.'];
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTyping && index < texts[textIndex].length) {
                setDisplayText((prev) => prev + texts[textIndex].charAt(index));
                setIndex((prev) => prev + 1);
            } else if (!isTyping && index > 0) {
                setDisplayText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            } else if (index === texts[textIndex].length) {
                setIsTyping(false);
            } else if (index === 0 && !isTyping) {
                setTextIndex((prev) => (prev + 1) % texts.length);
                setIsTyping(true);
            }
        }, isTyping ? 150 : 100);

        return () => clearInterval(typingInterval);
    }, [index, isTyping, textIndex, texts]);

    useEffect(() => {
        if (!isTyping && index === 0) {
            setDisplayText("");
        }
    }, [textIndex, isTyping, index]);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div id='HOME' className="HS flex flex-row justify-center p-10 items-center w-full gap-5">
            <img src={IMG} alt="Hero-img" id='IMG' />
            <div className='PS w-3/6' id='PS'>
                <p className='text-black dark:text-white'>Hello, I am <span className='text-cyan-300'>Brian Ali </span> and I am a :</p>
                <p><span className='text-cyan-300'><span className='text-transparent'>.</span>{displayText}</span></p>
                <br />
                <p className='text-black dark:text-white'>I am currently studying BSc in Information Technology in <span className='text-cyan-300'>Mt Kenya University</span>. I am looking forward to partnering with others like me and expanding my knowledge in the programming field.</p>
                <br />
                <p className='text-black dark:text-white'>Feel Free to contact me on:</p>
                <br />
                <div className="flex flex-row justify-start gap-4" id='Icon-Container'>
                    <a href="https://www.instagram.com/bryce._.six/" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='text-black hover:text-cyan-400 hover:cursor-pointer duration-500 dark:text-white dark:hover:text-cyan-300' />
                    </a>

                    <a href="https://github.com/gamerfunky78" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size="2x" className='text-black hover:text-cyan-400 hover:cursor-pointer duration-500 dark:text-white dark:hover:text-cyan-300' />
                    </a>

                    <a href="mailto:brianali427@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className='text-black hover:text-cyan-400 hover:cursor-pointer duration-500 dark:text-white dark:hover:text-cyan-300'/>
                    </a>
                </div>
            </div>

            <FontAwesomeIcon icon={darkMode ? faToggleOn : faToggleOff} id='Toggler' size='2x' onClick={toggleDarkMode} className='text-black dark:text-white' />
            <FontAwesomeIcon icon={faBriefcase} id='Pf' size='2x' className='text-black dark:text-white'/>
        </div>
    );
}
