import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <div className="main-container">
      <div className="skill-box">
        <span className="title">Python</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">PHP</span>
        <div className="skill-bar">
          <span className="skill-per php">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">C++</span>
        <div className="skill-bar">
          <span className="skill-per c">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html-1">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">React.js</span>
        <div className="skill-bar">
          <span className="skill-per react">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
    </div>
  )
}
