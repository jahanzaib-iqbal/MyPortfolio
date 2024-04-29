import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bankist from "../../Assets/Projects/Bankist.png";
import currencyConv from "../../Assets/Projects/currencyConverter.jpg";
import furniture from "../../Assets/Projects/furnitureSystem.png";
import guess from "../../Assets/Projects/guessTheNumber.png";
import pigDice from "../../Assets/Projects/pigDiceGame.png";
import travelix from "../../Assets/Projects/travelix.png";
import travelly from "../../Assets/Projects/travelly.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelix}
              isBlog={false}
              title="Travelix - Final Year Project"
              description="Travelix is a Travel booking mobile and web application. I am developing as my FYP. This 
app enables travelers to book travel clubs, hotels, and car rental services.As a full stack developer, I translate designs into functional and visually appealing interfaces using React Native and React Js. In parallel, I leveraged the 
robust capabilities of Node Js and MongoDB to handle the backend infrastructure."
              ghLink="https://github.com/jahanzaib-iqbal"
              demoLink="https://travelix-final-web.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pigDice}
              isBlog={false}
              title="The PIG Dice Game 🎲"
              description="This is a Dice Pig game made in JavaScript with interactive UI. 
              There are two Players. Each time Dice is rolled, the score current is added to the previous score. If you hold the score, the score will be saved to your total score else it will not be counted. If it appears 1 then the player is switched and all current scores will vanish if not held. 100 is wiining Score"
              ghLink="https://github.com/jahanzaib-iqbal/The-Pig-Game"
              demoLink="https://thedicegamebyjahanzaib.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankist}
              isBlog={false}
              title="Bankist - The Transaction App"
              description="Developed an interactive Bankist WebApp with JavaScript and Frontend with HTML+ CSS which provides login functionality for different users to keep record of transactions of different bank accounts such as deposit, withdrawal and Loan."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://transactionappbyjz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess The Number"
              description="This is a Number Guessing browser based game made in JavaScript with interactive UI. You have to guess a number between 1 and 50. You have 20 tries. Also it records the High score, scored by you"
              ghLink="https://github.com/jahanzaib-iqbal/Guess-The-Number-Game"
              demoLink="https://numberguessbyjahanzaib.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelly}
              isBlog={false}
              title="Travelly"
              description="This is a Simple static website made with HTML and CSS and added modern animations and styles into it. I've also handled the Form submitting and responses."
              ghLink="https://github.com/jahanzaib-iqbal/travelly.github.io"
              demoLink="https://travellybyjahanzaib.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="Furniture Order Management System"
              description="Java Based App which allows you to place an order for Furniture or Notebooks automating the process of buying furnitures"
              ghLink="https://github.com/jahanzaib-iqbal/FurnitureOrderManagementSystem-Java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyConv}
              isBlog={false}
              title="Currency Converter App"
              description="This is a Android App that allows you to calculate your money from 1 currency to another currency keeping in mind the current rates of curencies."
              ghLink="https://github.com/jahanzaib-iqbal/CurrencyConverter_USD-PKR_Android"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
