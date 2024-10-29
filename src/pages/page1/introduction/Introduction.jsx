import React from 'react';
import './Introduction.css';

export default function Introduction() {
  return (
    <div className='intro-box'>
      <div className='myphoto'>
        <img src="./images/portfolio.avif" alt="my photo" />
      </div>
      <div className="typewriter">
        <h1>
          <span>Hey there, I'm Ayush!</span>
          <span>Crafting digital experiences that amaze.</span>
        </h1>
      </div>
      <div className="intro-content">
        <p>
          Turning ideas into interactive realities with a dash of creativity.
        </p>
        <p>
          Let's build something extraordinary together!
        </p>
      </div>
    </div>
  );
}
