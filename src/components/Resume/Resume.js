import React from 'react';
import './Resume.css';

const Resume = () => {
 
  return (
    <div className="Resume">
    <div className="MyMainContent" >
     
      <div className="Leftpart">
        <div>
        <img src="Images.jpeg" className="Image" alt="" />
         <h1 className="SpaceInExperience BorderLine">Education</h1>
         <p><strong>Xi'an International Studies University</strong></p>
         <p>Bachelor's degree, Creative Writing  (September 2007 - July 2011)</p>
         <p><strong>Kickstart Coding</strong></p>
         <p>Web Developer in Training  (December 2022) </p>
         <p><strong>Laney College</strong></p>
         <p>Associate's degree, Computer Science in Java (August 2022) </p>
         <h1 className="SpaceInExperience BorderLine">Skill</h1>
         <p >HTML, CSS, Python, Django, SQL, JavaScript, Node, Redux, Router, React, MERN stack</p>
         <h1 className="SpaceInExperience BorderLine">Language</h1>
         <p>English</p>
         <p>Chinese</p>
        
        </div>
      </div>
       <div className="Rightpart">
        <div>
         <h2>Yan Zhu</h2>
         
         <p><strong>Full-Stack Web Developer</strong> </p>
         <p>I have 7 years of video game design experience and 
            2 years of customer service experience. Proficient 
            in HTML, CSS, JavaScript, Node.js, React, SQL, 
            Django, and Python. I create innovative and efficient
            web solutions for exceptional user experiences. Resilient, 
            adaptable team player seeking growth and embracing lifelong
            learning. Motivated to pursue a new career and advance skills. 
            Solution-oriented mindset, enthusiasm, and kindness help build 
            strong relationships with colleagues, supervisors, and clients.
            Dependable, earnest, and joyful, always striving to deliver 
            high-quality work and exceed expectations.
          </p>
       
        </div>
        <div>
         <h1  className="SpaceInExperience Experiencemargin BorderLine">Experience</h1>
         <div className="ExperienceLeft">
         <ul class="job-list">
		<li className="SpaceInExperience"> 
		 <p>August 2021 - December 2022 (1 year 5 months)</p>
		 <p>Oakland, California, United States</p>
		 <p>CVS Health Inc</p>
		 <p><strong>Shift Supervisor</strong></p>
		 <p>Provided customer service at register,
		  photo department, and on the floor,Excelled 
		  in promoting carepass program to customers
		   Assisted with stocking, unloading and tag changes
		 </p>
		
		</li>
		<li className="SpaceInExperience">
		 
        
		 <p>August 2019 - July 2021 (2 years)</p>
		 <p>FB Organics</p>
		 <p>Cortez, Colorado, United States</p>
		 <p><strong>Health Food Store Associate</strong></p>
		 <p>Assisted customers in finding supplements, 
		    vitamins, organic foods, and other
		    health products based on needs and interests and
		    acted as cashier.
		    Organized and managed inventory and orders, 
		    arranged and stockedproducts.
		  </p>
		 
		  </li>
		  <li className="SpaceInExperience">
		 
		 <p>October 2018 - October 2019 (1 year 1 month)</p>
		 <p>Montezuma County, Colorado, United States</p>
		 <p><strong>Volunteer at Montezuma County, CO Schools</strong></p>
		 <p>Tutored Chinese students in academic work
		 and English language development
		 </p>
		 
		 </li>
		 <li className="SpaceInExperience">
		
		<p>April 2015 - July 2017 (2 years 4 months)</p>
		<p>Shanghai Mngo Technology Co.</p>
		<p>Shanghai, China</p>
		<p><strong>Video Game Designer</strong></p>
		<p>Developed the initial concept and vision for a game. 
		Defined the game's genre, theme, and target audience. 
		Created storylines, characters, and worlds that engaged players.
		Designed rules, controls, interactions, and player progression 
		systems to ensure an engaging and enjoyable experience.
		Worked closely with artists, programmers, sound designers,
		 and producers to ensure the game's design aligned with the 
		 overall vision.</p>
		
		 </li>
		 <li className="SpaceInExperience">
		
		<p>January 2013 - April 2015 (2 years 4 months)</p>
		<p>Huo Zhi Yan Internet</p>
		<p>Shanghai, China </p>
		<p><strong>Video Game Designer</strong></p>
		<p> Wrote storylines for video games and cooperated 
		with other members of the creative team.
		Sought and analyzed customer feedback.
		Created detailed design documents and effectively 
		communicated ideas to the development team.</p>
		
		</li>
		<li className="SpaceInExperience">
		
		<p>July 2011 - January 2013 (1 year 7 months)</p>
		<p>Shanghai Ku Ba Information Technology Co.</p>
		<p>Shanghai, China </p>
		<p><strong>Video Game Designer</strong> </p>
		<p>Designed storylines and dialogue for video games
		Created Excel spreadsheets with character names, 
		dialogue text, timestamps, and relevant information 
		columns for easy import and parsing by the program
		Tested and collected feedback from players,
		 communicated and collaborated with programmers and artists</p>	
		 
		  </li>
		 </ul>
        </div>
       </div>
      </div>
    </div>
   </div>
  );
};

export default Resume;





