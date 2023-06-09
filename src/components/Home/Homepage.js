import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleResumeClick = () => {
    history.push('/resume');
  };

  const handleProjectClick = () => {
    history.push('/project');
  };

  const handleContactClick = () => {
    history.push('/contact');
  };

  return (
  <div>
    <div className="Container">
      <div className="MainContent">
        <div className="ImageContainer">
          <img src="Images.jpeg" className="Round-image" alt="" />
        </div>

        <div className="ContentContainer">
          <h1>Hello</h1>
          <p>A Bit About Me:</p>
          <p>
            I am a dedicated and enthusiastic new programmer, fueled by a deep passion for coding and actively seeking
            opportunities to apply my skills and contribute to impactful projects in the job market.
          </p>
          <button onClick={handleResumeClick} className="Round-button Blue-button">
            Resume
          </button>
          <button onClick={handleProjectClick} className="Round-button Green-button">
            Project
          </button>
          <button onClick={handleContactClick} className="Round-button Orange-button">
            Contact
          </button>
        </div>
      </div>

      
    </div>
    
    <footer className="Footer">
       
        
        <div className="FootGray">
          <p>Copywright © 2023 YanZhu</p>
        </div>
      </footer>
      </div>
  );
};

export default Home;
