import React from 'react';
import './HeroSection.css';
import photo from './image1.png';


const HeroSection = () => {
    return (
        <div className='main'>
        <section className="hero">
            <div className="hero-content">
                <h1>Make Money Easy with Land</h1>
                <p>Most practical, easiest and structured way to make everything related to Business from scratch. No prior knowledge is needed.</p>
                <button className="get-started-button">Get started</button>
            </div>
          <div className='hero-image'>
            <img src={photo}alt='map'></img>
            <h4 className='desc'>1-1-119/A/9, Pillamari, Suryapet, Telangana</h4>
          </div>

        </section>
        <div className='detials'>
          <h3>For  any enquiries please Whatsapp at +917075150297, ganeshkekkireni7731@gmail.com</h3>
        </div>
        </div>
        
    );
};

export default HeroSection;
