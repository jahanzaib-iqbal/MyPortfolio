import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiLogoCss3 } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from 'react-icons/di';
import { SiNextdotjs} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
  

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}

   
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill />
      </Col> */}

  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

    </Row>
  );
}

export default Techstack;
