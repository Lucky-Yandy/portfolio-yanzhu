import React from 'react';
import './Contact.css';

const Contact = () => {
  
  /*const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
  };

*/


 return(
  <div class="contact-container">
  <h2>Contact </h2>
  <p>Email: floraryz@gmail.com</p>
  <div class="social-media">Follow me :  <span />
    <a href="https://github.com/Lucky-Yandy">
      <img class="FooterImage" src="Github.png" alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/4523yandy/">
      <img class="FooterImage" src="Linkedin.png" alt="linkedin" />
    </a>
  </div>
</div>


);
}
export default Contact;
