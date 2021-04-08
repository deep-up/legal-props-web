import React from 'react';
import { Container, Row, Col, Breadcrumb, Image, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import "./Login.scss";
import { ShieldLockFill, PersonFill, KeyFill } from 'react-bootstrap-icons';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../../utils/constants';


function Login() {
  const [t, i18n] = useTranslation("global");

  return (
    <Container fluid>
      <Row>
        <Col className="imageBig d-none d-md-block" sm={0} md={4} lg={7} ></Col>
        <Col sm={12} md={8} lg={5}>
          <Row fluid>
            <Col>
              <Row className="float-right">
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <a href="#" onClick={() => { i18n.changeLanguage("en") }} >English</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a href="#" onClick={() => { i18n.changeLanguage("es") }}>Español</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link to="/about">{t("menu.about")}</Link>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col xs="auto" >
              <Image src="https://img.freepik.com/psd-gratis/cerrar-maqueta-logo-tela-blanca_49421-147.jpg?size=626&ext=jpg" width="300px" height="200px" alt="logo" />
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <div className="appTitle">LegalProps <sup>V0.1</sup></div>
            </Col>
          </Row>
          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <div className="appDesc">{t("login.app-descr")}</div>
            </Col>
          </Row>
          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <h2><ShieldLockFill /></h2>
            </Col>
            <Col xs="auto">
              <div className="appDesc">{t("login.signin")}</div>
            </Col>
          </Row>

          <Row className="p-2">
            <Col xs={12}>
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="secusername" placeholder={t("login.username")} />
              </InputGroup>
            </Col>
          </Row>

          <Row className="p-2">
            <Col xs={12}>
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><KeyFill /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="secpwd" placeholder={t("login.password")} />
              </InputGroup>
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-2">
            <Col >
              <Button variant="primary" type="submit" size="lg" block>{t("login.login")}</Button>
            </Col>
          </Row>
          <Row className="justify-content-sm-center p-2">
            <Col >
              <Card >
                <Card.Body>{t("login.copyright")} &copy; 2021 - Powered by  <a href="https://www.deep-up.com" title="deep up">Deep-up</a> </Card.Body>
              </Card>
            </Col>
          </Row>


        </Col>
      </Row>
    </Container>
  );
}

export default Login;