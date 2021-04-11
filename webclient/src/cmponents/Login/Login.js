import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Image, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { ShieldLockFill, PersonFill, KeyFill } from 'react-bootstrap-icons';
import { authCall } from '../../calls/Auth';
import sha512 from "js-sha512";
import { showSuccessAlert, showErrorAlert} from "../../utils/Alerts"
import Store from "../../redux/Store";


function Login() {
  const store = useStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [t, i18n] = useTranslation("global");
    const [alert, setAlert] = useState("");
  const clearAlert = ()=>{
    setAlert("<div></div>");
  }


  function Auth() {
    function encrypt() {
      return new Promise((resolve, reject) => {
        if (username.length === 0) {
          reject(new Error('login.noUsername'));
        }
        if (password.length === 0) {
          reject(new Error('login.noPassword'));
        }
        const encrypted = sha512.update(password);
        resolve(encrypted);
      });
    };

    encrypt()
      .then((encrypted) => {
        setPassword(encrypted);
        authCall(username, encrypted, (data)=>{
          const auth = data.data.auth;
          console.log({authres:auth});
          if (auth.success){
            console.log("success");
            setAlert( showSuccessAlert(t(auth.message),t(auth.message),clearAlert,1000) );
          }else{
            console.log("fail");
            setAlert( showErrorAlert(t(auth.message),t(auth.message),clearAlert) );
          }
        });
        setPassword("");
        
      })
      .catch((error) => {
        setAlert( showErrorAlert(t("login.auth.failTitle"),t(error.message),clearAlert) );
      });
  }


  return (
    <Container fluid>
      {alert}
      <Row>
        <Col className="imageBig d-none d-md-block" sm={0} md={4} lg={7} ></Col>
        <Col sm={12} md={8} lg={5}>
          <Row >
            <Col>
              <Row className="float-right">
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item  onClick={() => { i18n.changeLanguage("en") }} >English
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => { i18n.changeLanguage("es") }}>Español
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/about">{t("menu.about")}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-sm-center">
            <Col xs="auto" >
              <Image src="https://img.freepik.com/psd-gratis/cerrar-maqueta-logo-tela-blanca_49421-147.jpg?size=626&ext=jpg" width="200px" height="150px" alt="logo" />
            </Col>
          </Row>

          <Row className="justify-content-sm-center p-3">
            <Col xs="auto">
              <div className="appTitle">LegalProps <sup>V0.1</sup></div>
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
                <FormControl id="secusername" placeholder={t("login.username")} value={username} onChange={e => setUsername(e.target.value)} />
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
              <Button variant="primary" type="submit" size="lg" block onClick={Auth}>{t("login.login")}</Button>
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