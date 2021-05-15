import React, { useState } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Button, Card, CardDeck, FormControl, InputGroup, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function ParamTemplates() {
    const [t, i18n] = useTranslation("global");


    const templates = [{
        _id: 123,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 124,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 1245,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 1246,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 1247,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 1248,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 1249,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 12400,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 12411,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 124123,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 124444,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 124124,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }, {
        _id: 121247,
        title: "contract1",
        version: "1.0 - 01/01/2018",
        descr: "long template description  lorem ipsum sit atmet"
    }];



    return (
        <React.Fragment>
            <InputGroup className="p-1">
                <FormControl
                    placeholder="Search..."
                    aria-label="Search Box"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button >Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <CardDeck className="p-1 m-0">

                {TemplatesCard({ function: true, title: t("functions.add"), descr: t("templates.createNewTemplate") })}
                {templates.map((template, index) => {
                    return (TemplatesCard(template));
                })}

            </CardDeck>
        </React.Fragment>
    )
}

function TemplatesCard(template) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment key={template._id}>
            <Card key={"card:" + template._id} onClick={handleShow} style={{ minWidth: '200px', maxWidth: '250px' }} className="m-1">
                <Card.Header className={"p-1 "+(template.function?"bg-info":"bg-primary")}>
                    {template.title} <div className="text-muted text-right" style={{ fontSize: "0.7rem" }}>{(template.version ?"version:": "+" )}{template.version}</div> 
                    </Card.Header>

                <Card.Body className={"p-1 "+(template.function?"bg-info":"") }>
                    <Card.Text>{template.descr}</Card.Text>
                </Card.Body>
            </Card>
            <Modal key={"modal:" + template._id} show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{template._id} - {template.title} - ({template.version})</Modal.Title>
                </Modal.Header>
                <Modal.Body>{template.descr}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Edit
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        create Props
          </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
