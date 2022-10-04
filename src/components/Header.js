import React from 'react'
import GithubIcon from '../img/github.svg'
import InstagramIcon from '../img/instagram.svg'
import LinkedIcon from '../img/linkedin.svg'

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="profile">
                    <div className="profile-pic"></div>
                    <div className="profile-name">
                        hokky aryasta
                    </div>
                    <div className="profile-subtitle">
                        information system student
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://github.com/hokkyar" className="github social-img">
                        <img src={GithubIcon} alt="Github Icon" />
                        <span>github</span>
                    </a>
                    <a href="https://www.instagram.com/hokky_ar" className="ig social-img">
                        <img src={InstagramIcon} alt="Instagram Icon" />
                        <span>instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hokkyaryasta" className="linkedin social-img">
                        <img src={LinkedIcon} alt="LinkedIn Icon" />
                        <span>linkedIn</span>
                    </a>
                </div>
            </div>
        </header>
    )
}
