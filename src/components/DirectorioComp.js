import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import logo from './img/etapas_ciclon_aprende_1.jpg';

const DirectorioComp = () => {
    return (
        <div className="card-container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Sede</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">CP</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo electrónico:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>BAJA CALIFORNIA SUR</td>
                        <td>TIJUANA</td>
                        <td>CALLE PANFILO NATERA 6400 ENTRE FRANCISCO VILLA Y MACLOVIO HERRERA COL FRANCISCO VILLA</td>
                        <td>22615</td>
                        <td>(664) 634 9360</td>
                        <td>proteccioncivil@baja.gob.mx</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>BAJA CALIFORNIA SUR</td>
                        <td>MEXICALI</td>
                        <td>CALLE LAGO WINIPEG 441 COL  JARDINES DEL LAGO COL JARDINES DEL LAGO</td>
                        <td>21330</td>
                        <td>(686) 555 4998</td>
                        <td>proteccioncivil@baja.gob.mx</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>BAJA CALIFORNIA SUR</td>
                        <td>LA PAZ</td>
                        <td>BLVD LUIS DONALDO COLOSIO ESQ VALENTIN GOMEZ FARIAS COL PUEBLO NUEVO</td>
                        <td>612 123 80 00</td>
                        <td>pagina@sepbcs.gob.mx</td>
                    </tr>

                    <tr>
                        <th scope="row">4</th>
                        <td>SONORA</td>
                        <td>HERMOSILLO</td>
                        <td>NAYARIT 289 ESQUINA CON GANDARA COLONIA SAN BENITO</td>
                        <td></td>
                        <td>(662)236 44 00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>CHIHUAHUA</td>
                        <td>CHIHUAHUA</td>
                        <td>AV H COLEGIO MILITAR 6509 NOMBRE DE DIOS</td>
                        <td>31150</td>
                        <td>800 MARCAME (627 2263)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>COAHUILA</td>
                        <td>ARTEAGA</td>
                        <td>LIBRAMIENTO OSCAR FLORES TAPIA KM 12</td>
                        <td>25350</td>
                        <td>(844) 439 27 46</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default DirectorioComp;