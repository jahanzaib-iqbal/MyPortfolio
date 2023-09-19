import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiVisualstudiocode, SiPostman } from 'react-icons/si';

import { AiFillChrome, AiFillWindows } from 'react-icons/ai';
import { BiLogoFigma } from 'react-icons/bi';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillWindows />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
