import React from 'react';
import { Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import logo from './img/etapas_ciclon_aprende_1.jpg';
import logo1 from './img/uso-de-la-escala-saffir-simpson.jpg';
import logo2 from './img/los-huracanes-mas-devastadores-de-la-historia.jpg';
import logo3 from './img/etapas_ciclon_aprende_1.jpg';
import logo4 from './img/uso-de-la-escala-saffir-simpson.jpg';
import logo5 from './img/los-huracanes-mas-devastadores-de-la-historia.jpg';

const Learn = () => {
  return (
    <div className="card-container">
      <h1>Learn</h1>
          <p>
              <Card className="card-learn">
                  <Card.Img variant="top" src={logo} className="card-image"/>
                  <Card.Body>
                      <Card.Title>¿Cuáles son las etapas del ciclón?</Card.Title>
                      <Card.Text>
                          Depresión tropical, tormenta tropical y huracán.
                      </Card.Text>
                  </Card.Body>
                 
              </Card>
          </p>
          <p> <Card className="card-learn">
              <Card.Img variant="top" src={logo1} className="card-image"/>
              <Card.Body>
                  <Card.Title>¿Existe alguna escala para los huracanes?</Card.Title>
                  <Card.Text>
                      Claro!, se le conoce como la escala Saffir-Simpson y los clasifica por la rapidez de sus vientos.
                  </Card.Text>
              </Card.Body>

               </Card>
          </p>
          <p> <Card className="card-learn">
              <Card.Img variant="top" src={logo2} className="card-image"/>
              <Card.Body>
                  <Card.Title>¿Qué sucede con el nombre de un huracán altamente destructivo?</Card.Title>
                  <Card.Text>
                      Es retirado de las listas e intercambiado por otro nombre que inicie con la misma letra.
                  </Card.Text>
              </Card.Body>

          </Card></p>

          <p>
              <Card className="card-learn">
                  <Card.Img variant="top" src={logo3} className="card-image" />
                  <Card.Body>
                      <Card.Title>¿Qué pasa si te quedas sin nombres en la lista?</Card.Title>
                      <Card.Text>
                          Hasta el 2020 se utilizaba el alfabeto griego pero como en ese año hubo varias tormentas lo suficientemente dañinas como para retirar los nombres, se decidió hacer una segunda lista de nombres auxiliares para cada año.
                      </Card.Text>
                  </Card.Body>

              </Card>
          </p>
          <p> <Card className="card-learn">
              <Card.Img variant="top" src={logo4} className="card-image"/>
              <Card.Body>
                  <Card.Title>¿Qué es el lado sucio de una tormenta?</Card.Title>
                  <Card.Text>
                      Aunque los huracanes tienden a ser simétricos, el movimiento de traslación de éstos, más la suma o resta de vientos, generará una estructura asimétrica en donde el tiempo será más extremo y peligroso en alguna dirección que en otras.
                  </Card.Text>
              </Card.Body>

          </Card>
          </p>
          <p> <Card className="card-learn">
              <Card.Img variant="top" src={logo5} className="card-image"/>
              <Card.Body>
                  <Card.Title>¿Hay huracanes en otros planetas?</Card.Title>
                  <Card.Text>
                      Aunque no se conoce ningún otro planeta que tenga las condiciones similares a las de la tierra para su formación, se cree que los planetas gigantes gaseosos son capaces de generar tormentas similares. La más famosa se encuentra en Júpiter.

                  </Card.Text>
              </Card.Body>

          </Card></p>
    
    </div>
  );
};

export default Learn;
