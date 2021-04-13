import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UtilsContainer from '../common/UtilsContainer';

function About() {
    return (
        <React.Fragment>
            <h2>About Page</h2>
            <Row className="float-right">
                <Col>
                  <UtilsContainer></UtilsContainer>
                </Col>
              </Row>
        </React.Fragment>
    );
}

export default About;