import React from 'react'
import "./Footer.css"
import { FaCodepen } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";


import "./Footer.css"
import Particles from '../Particles/Particles';

const Footer = () => {
    const footerLinks=[
        {id:1,icon:<FaCodepen/>,link:"https://codepen.io/jgreen721"},
        {id:1,icon:<AiFillGithub/>,link:"https://github.com/jgreen721"},
        {id:1,icon:<SiFrontendmentor/>,link:"https://www.frontendmentor.io/profile/jgreen721"},
    ]
  return (
    <footer className="footer">
        <Particles/>
        <ul className="footer-links">
            {footerLinks.map(link=>(
                <li key={link.id} className="footer-link-item">
                    <a href={link.link}>
                        {link.icon}
                    </a>
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer