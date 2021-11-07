import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import logo from './img/etapas_ciclon_aprende_1.jpg';

const DirectorioComp = () => {
    return (
        <div className="Container">
            <h1>Learn</h1>
            <p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>�Cu�les son las etapas del cicl�n?</Card.Title>
                        <Card.Text>
                            Depresi�n tropical, tormenta tropical y hurac�n.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </p>
            <p>A�ade contenido de aprendizaje aqui! :D</p>
            <p>A�ade contenido de aprendizaje aqui! :D</p>

        </div>
    );
};

export default Learn;