import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello, I am <span className="purple">Jahanzaib Iqbal </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> I am a final year student pursuing BS Software Egineering
            (BSE) at COMSATS University.
            <br />
            Additionally, I am currently working as a Freelancer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Urdu Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
          "Your imagination is your only limit."{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
