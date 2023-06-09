import React from 'react';
import './Project.css';

const Project = () => (
  <div className="ProjectMainContent">
  <div className="Project">
    <div className="Card">
      <img src="Images.jpeg" alt="Image1" />
      <h1>Project 1</h1>
      <div className="Card-info">
        <p>
          This app is for the kids who's parents are not English speakers. This app helps the parents read stories to their kids before bedtime.
        </p>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Check out the details:
      </a>
      </div>
    </div>

    <div className="Card">
      <img src="Images.jpeg" alt="Image1" />
      <h1>Project 2</h1>
      <div className="Card-info">
        <p>
          This app is for the kids who's parents are not English speakers. This app helps the parents read stories to their kids before bedtime.
        </p>
        
         <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Check out the details:
      </a>
      </div>
    </div>

    <div className="Card">
      <img src="Images.jpeg" alt="Image1" />
      <h1>Project 3</h1>
      <div className="Card-info">
        <p>
          This app is for the kids who's parents are not English speakers. This app helps the parents read stories to their kids before bedtime.
        </p>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Check out the details:
      </a>
      </div>
    </div>
    </div>
  </div>
);

export default Project;   
