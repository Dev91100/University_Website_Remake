import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= '/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          navigateTo={'/faculties'}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            //Prevents window.open to exceute when the page frist loads
            //Youtube link to a cinematic video on the University 
            e.preventDefault();
            window.open("https://www.youtube.com/watch?v=p02oMNoci0U", "_blank");
            }}
          // onClick={window.open("https://www.youtube.com/watch?v=p02oMNoci0U", "_blank")}
          // onClick={parent.open("https://www.youtube.com/watch?v=p02oMNoci0U")}
          // onClick={window.location.href='https://www.youtube.com/watch?v=p02oMNoci0U'}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
