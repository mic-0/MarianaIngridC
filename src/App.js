import "./App.css";
import mic from "./MIC-2-.png";
import pic from "./pic.jpg";
import proj1 from "./proj-1.JPG";
import proj2 from "./proj-2.JPG";
import proj3 from "./proj-3.JPG";
import mycv from "./mariana_ingrid_calle_en.pdf";
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  }

  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const navList = document.querySelectorAll(".navlist li");

  const options = {
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      console.log(e);
      console.log(e.target.id);
      //changing navbar style on scroll to next section
      if (e.isIntersecting) {
        console.log(e.target.id);
        if (e.target.id !== "home") {
          nav.classList.add("active");
        } else {
          nav.classList.remove("active");
        }
        //section indicator
        navList.forEach((link) => {
          //remove active class from other
          link.classList.remove("active");
          if (e.target.id === link.dataset.nav) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  return (
    <div className="App">
      <nav>
        <div className="navicon-container">
          <a
            href="/"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img className="navicon-ico" src={mic} width={55} height={55}></img>
          </a>
        </div>
        <ul className="navlist">
          <li data-nav="home">
            <a href="#home">Home</a>
          </li>
          <li data-nav="about">
            <a href="#about">About</a>
          </li>
          <li data-nav="projects">
            <a href="#projects">Projects</a>
          </li>
          <li data-nav="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <div className="home-photo">
          <img src={pic} width={240} height={310}></img>
        </div>
        <div className="home-title">
          <span>Hi!</span>
          <h1>I'm Mariana Ingrid Calle</h1>
          <span>Node & React Developer</span>
          <a href={mycv} download='Mariana_Ingrid_Calle'>
            <input type='button' value='DOWNLOAD CV'></input>
          </a>
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <div>
            <h2>About me</h2>
            <p>
              Hi, I'm Mariana Ingrid Calle, a Web Developer who enjoys learn new
              things and facing challenges. I'm responsible, commited and good
              co-worker.
            </p>
            <br />
            <p>
              I learned to program in a self-taught way taking courses and
              practicing. I like to learn things deeply, understanding what
              happens in the background of the code we program, even if we don't
              see it. Like the algorithms that run in the background when we use
              a technology
            </p>
            <br />
            <p>
              My main goal is to be part of a team where I can grow both
              professionally and personally.
            </p>
          </div>
          {/*<div>
            <h2>Skills</h2>
            <p></p>
            
          </div>
           */}
        </div>
      </section>
      <section id="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <br/>
          <div className="projects">
              <div className="projects-el">
                <img src={proj1}></img>
                <h3>Ecommerce Project</h3>
                <a href='https://ecommerce-mern-app-mic.herokuapp.com' target='_blank' style={{marginLeft: '5%', marginTop:'10%', alignItems: 'end', color: 'black'}}><AiOutlineGlobal size={'1.5rem'} /></a>
                <a href='https://github.com/MarianaIngridC/FINALECOMMERCE' target='_blank' style={{marginLeft: '1%', marginTop:'10%', alignItems: 'end', color: 'black'}}><BsGithub size={'1.5rem'} /></a>
                
                <p>A Ecommerce website where users can add products to the cart, and to proceed the payment section, users must have an account and login</p>
                
                <h4>Technologies:</h4>
                
                <div className="projects-tags">
                  <span>React |</span>
                  <span>Redux |</span>
                  <span>Express |</span>
                  <span>Mongodb |</span>
                  <span>React-Bootstrap</span>
                </div>
              </div>

              <div className="projects-el">
                <img src={proj2}></img>
                <h3>Cryptocurrency Tracker</h3>
                <a href='https://mic-project-cryptocurrency-tracker.netlify.app' target='_blank' style={{marginLeft: '5%', marginTop:'10%', alignItems: 'end', color: 'black'}}><AiOutlineGlobal size={'1.5rem'} /></a>
                <a href='https://github.com/MarianaIngridC/cryptocurrency-tracker' target='_blank' style={{marginLeft: '1%', marginTop:'10%', alignItems: 'end', color: 'black'}}><BsGithub size={'1.5rem'} /></a>
                <p>A website where user can know the current prices of cryptocurrencies, and a graph with historical prices of each one</p>
                <h4>Technologies:</h4>
                
                <div className="projects-tags">
                  <span>React |</span>
                  <span>Context API |</span>
                  <span>Material-ui</span>
                </div>
              </div>

              <div className="projects-el">
                <img src={proj3} style={{marginLeft:'-7%'}}></img>
                <h3>Banking App</h3>
                
                <a href='https://github.com/MarianaIngridC/bank-system-app' target='_blank' style={{marginLeft: '1%', marginTop:'10%', alignItems: 'end', color: 'black'}}><BsGithub size={'1.5rem'} /></a>
                <p>A banking website where users can create account, increase balance with incomes, decrease balance with payments, transfer money and simulate loans </p>
                <h4>Technologies:</h4>
                <div className="projects-tags">
                  <span>React |</span>
                  <span>Redux |</span>
                  <span>Express |</span>
                  <span>PostgreSQL |</span>
                  <span>CSS3</span>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-container">
          <h2>Contact</h2>
          <div className="contact-icons">
            <a href='mailto:maring.calle@gmail.com' target='_blank'><BsFillEnvelopeFill color="black" size='1.8rem' /></a>
            <a href='https://github.com/MarianaIngridC' target='_blank'><BsGithub color="black" size='1.8rem'/></a>
            <a href='https://www.linkedin.com/in/mariana-ingrid-calle/' target='_blank'><BsLinkedin color="black" size='1.8rem'/></a>
          </div>
          
          <form  action="https://formsubmit.co/maring.calle@gmail.com" method="POST">
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                required
                min={4}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                min={10}
                onChange={(e) => setEmail(e.target.value)}
              />
            <label htmlFor="subject">Subject: </label>
            <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            <label htmlFor="message">Message: </label>
            <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                cols='33'
                rows='7'
                
                onChange={(e) => setMessage(e.target.value)}
              />
            <input className="send-button" style={{height:'4rem'}} type='submit' value='Send Email'></input>
          </form>
        </div>
      </section>
      <footer>Mariana Ingrid Calle © 2022</footer>
    </div>
  );
}

export default App;
