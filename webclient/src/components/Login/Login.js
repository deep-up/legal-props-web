import React, { useState } from 'react';
import { Container, Row, Col, Image, InputGroup, FormControl, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { ShieldLockFill, PersonFill, KeyFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from "react-redux";
import LoginUtilsContainer from '../common/LoginUtilsContainer';
import { auth } from '../../redux/actions';


function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((Store) => Store.authReducer);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [t] = useTranslation("global");

  function authInitiator() {
    dispatch(auth({ email, password }));
  }

  return (
    <Container fluid>
      <div>{authState.token}</div>
      <Row>
        <Col className="imageBig d-none d-md-block" sm={0} md={4} lg={7} ></Col>
        <Col sm={12} md={8} lg={5}>
          <Row >
            <Col>
              <Row className="float-right">
                <Col>
                  <LoginUtilsContainer></LoginUtilsContainer>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col xs="auto" >
              <Image src={process.env.PUBLIC_URL + '/img/legalpropsLogo.svg'} width="200px" height="200px" alt="logo" />
              <Button onClick={() => {
                React.lazy(import ('bootswatch/dist/superhero/bootstrap.min.css'));
              }} >Change theme</Button>
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <div className="appTitle"><Image src={process.env.PUBLIC_URL + '/img/Legalprops.svg'} width="200px" alt="logo" /><sup>V0.1</sup></div>
            </Col>
          </Row>
          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <h2><ShieldLockFill /></h2>
            </Col>
            <Col xs="auto">
              <div className="title">{t("login.signin")}</div>
            </Col>
          </Row>

          <Row className="p-2">
            <Col xs={12}>
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="secEmail" placeholder={t("login.email")} value={email} onChange={e => setEmail(e.target.value)} />
              </InputGroup>
            </Col>
          </Row>

          <Row className="p-2">
            <Col xs={12}>
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><KeyFill /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" id="secpwd" placeholder={t("login.password")} value={password} onChange={e => setPassword(e.target.value)} />
              </InputGroup>
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-2">
            <Col >
              <Button variant="primary" type="submit" size="lg" block onClick={authInitiator}>{t("login.login")}</Button>
            </Col>
          </Row>
          <Row className="justify-content-sm-center p-2">
            <Col >
              <div className="footerLogin">{t("login.copyright")} &copy; 2021 - Powered by <a href="www.deep-up.com">Deep-Up</a></div>
            </Col>
          </Row>


        </Col>
      </Row>
    </Container>
  );
}

export default Login;