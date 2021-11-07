import React from 'react';
import { Card } from 'react-bootstrap';
import logo from './img/etapas_ciclon_aprende_1.jpg';
import logo1 from './img/uso-de-la-escala-saffir-simpson.jpg';
import logo2 from './img/los-huracanes-mas-devastadores-de-la-historia.jpg';
import logo3 from './img/nombres.jpg';
import logo4 from './img/tornado.jpg';
import logo5 from './img/los-huracanes-mas-devastadores-de-la-historia.jpg';

const Learn = () => {
  return (
    <div className="card-container">
      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
            variant="top"
                      src={logo}
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title>¿Cuáles son las etapas del ciclón?</Card.Title>
          <Card.Text>
            Depresión tropical, tormenta tropical y huracán.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
            variant="top"
                      src={logo1}
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title>¿Existe alguna escala para los huracanes?</Card.Title>
          <Card.Text>
            Claro!, se le conoce como la escala Saffir-Simpson y los clasifica
            por la rapidez de sus vientos.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
            variant="top"
                      src={logo2}
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title>
            ¿Qué sucede con el nombre de un huracán altamente destructivo?
          </Card.Title>
          <Card.Text>
            Es retirado de las listas e intercambiado por otro nombre que inicie
            con la misma letra.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
                      variant="top"
                      src={ logo3}
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title>
            ¿Qué pasa si te quedas sin nombres en la lista?
          </Card.Title>
          <Card.Text>
            Hasta el 2020 se utilizaba el alfabeto griego pero como en ese año
            hubo varias tormentas lo suficientemente dañinas como para retirar
            los nombres, se decidió hacer una segunda lista de nombres
            auxiliares para cada año.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
                      variant="top"
                      src={ logo4}
            className="card-image"
          />
        </div>
        <Card.Body>
                  <Card.Title>¿Es lo mismo un huracán que un tornado? </Card.Title>
          <Card.Text>
                      Oh  no, un tornado tiene un diámetro de tan sólo 100 metros y se producen por medio de una tormenta eléctrica o una nube de tipo cumulonimbo, además de ser un fenómeno mayoritariamente terrestre, mientras que un huracán tiene un radio de decenas o centenas de kilómetros y está compuesto por varias docenas de éstas tormentas. Al tocar tierra, se debilita debido a la pérdida de una fuente de calor y humedad.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-learn">
        <div className="img-container">
          <Card.Img
            variant="top"
            src="https://picsum.photos/seed/picsum/300"
            className="card-image"
          />
        </div>
        <Card.Body>
          <Card.Title>¿Hay huracanes en otros planetas?</Card.Title>
          <Card.Text>
            Aunque no se conoce ningún otro planeta que tenga las condiciones
            similares a las de la tierra para su formación, se cree que los
            planetas gigantes gaseosos son capaces de generar tormentas
            similares. La más famosa se encuentra en Júpiter.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Learn;
