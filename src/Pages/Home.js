import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import profilePic from '../../src/Assets/propic.jpg';
import profilePic2 from '../../src/Assets/propic2.jpg';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import pro1 from '../../src/Assets/pro1.jpg';
import pro2 from '../../src/Assets/pro2.jpg';
import pro3 from '../../src/Assets/pro3.jpg';
import pro4 from '../../src/Assets/pro4.jpg';
import pro5 from '../../src/Assets/pro5.jpg';
import pro6 from '../../src/Assets/pro6.jpg';


function Home() {
    const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div>
      
      <div id="home-section" className="home-img">
        <div className="page">
          <h1 className="text">Hey, Welcome to my Portfolio</h1>
          <p className="text-p">
            I’m a web programmer <br />
            Specializing in frontend & backend development using React, Bootstrap, PHP, and MySQL. <br />
            I create responsive, user-friendly, and high-performance web applications. <br />
            Let’s build something great together! 🚀
          </p>
          <br></br>
          <Link to="/contact" className="contact">Contact Me</Link>
          {/* <div className='social-link'>
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon type='logo' name='whatsapp-square'></box-icon>
            <box-icon type='logo' name='instagram-alt'></box-icon>
          </div> */}
        </div>
         
        <div className="home-content">
          <img src={profilePic} alt="Profile" className="pro-pic" />
        </div>
      </div>

     <div id="about-section" className="who-container">
      
  <div className="profile-pic-container">
    <img src={profilePic2} alt="Profile" className="profile2m-pic" />
  </div>

  <div className="who-text">
    <h1>Who am I?</h1>
    <h2 className='h1m'>I’m a passionate Web Developer & Programmer</h2>
    <p>
      With expertise in frontend and backend development. <br />
      I specialize in building responsive, user-friendly, and high-performance web applications using React, Bootstrap, PHP, and MySQL. <br />
      With a keen eye for design and a problem-solving mindset, I strive to create seamless digital experiences.
      Let’s innovate and build something amazing together!
    </p>
    <hr />
  </div>
</div>

    
      <div id="project-section" className="project-container">
        <h1 className="project-title">Projects</h1>

        <div className="project-grid">
         
          <Card className="project-card">
            <Card.Img variant="top" src={pro1} className="card-img" />
            <Card.Body>
              <Card.Title>Project One</Card.Title>
              <Card.Text>
                A modern web application built using React and Bootstrap.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(1)}>View Project</Button>
            </Card.Body>
          </Card>

         
          <Card className="project-card">
            <Card.Img variant="top" src={pro2} className="card-img" />
            <Card.Body>
              <Card.Title>Project Two</Card.Title>
              <Card.Text>
                An interactive UI with dynamic features.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(2)}>View Project</Button>
            </Card.Body>
          </Card>

        
          <Card className="project-card">
            <Card.Img variant="top" src={pro3} className="card-img" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
                A fully responsive and optimized website.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(3)}>View Project</Button>
            </Card.Body>
          </Card>

         
          <Card className="project-card">
            <Card.Img variant="top" src={pro4} className="card-img" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
                A fully responsive and optimized website.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(4)}>View Project</Button>
            </Card.Body>
          </Card>

     
          <Card className="project-card">
            <Card.Img variant="top" src={pro5} className="card-img" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
                A fully responsive and optimized website.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(5)}>View Project</Button>
            </Card.Body>
          </Card>

        
          <Card className="project-card">
            <Card.Img variant="top" src={pro6} className="card-img" />
            <Card.Body>
              <Card.Title>Project Three</Card.Title>
              <Card.Text>
                A fully responsive and optimized website.
              </Card.Text>
              <Button variant="primary" onClick={() => handleViewProject(6)}>View Project</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
