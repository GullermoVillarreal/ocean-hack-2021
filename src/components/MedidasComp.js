import React from 'react';
import calma from './img/calma.jpg';
import mochila from './img/mochila.png';
import refugio from './img/refugio.jpg';
import revisar from './img/revisar.jpg';

const MedidasComp = () => {
  return (
    <div className="card-container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            Viene un Cicl�n, �Y ahora qué? Antes del cicl�n...
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">1. Conserva la calma. </h6>
          <img className="img-container" alt="img" src={calma} />
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            2. Genera un plan de protección civil para tu familia y amigos que
            incluya:
          </h6>
          <ul class="list-group">
            <li class="list-group-item">
              Determinar un lugar para reunirse si se llegan a separar por causa
              del ciclón.
            </li>
            <li class="list-group-item">
              Ponerse de acuerdo sobre la distribuci�n de actividades
              preventivas que cada quien realizará.
            </li>
            <li class="list-group-item">
              Guardar fertilizantes e insecticidas en lugares a prueba de agua.
            </li>
            <li class="list-group-item">
              Procuren un lugar para proteger a sus animales y equipo de
              trabajo.
            </li>
            <li class="list-group-item">
              Generen estrategias de movilidad para ustedes y personas en
              condiciones de discapacidad.
            </li>

            <li class="list-group-item">
              Realicen simulacros de emergencia y eval�en su actuar en ellos.
            </li>
            <li class="list-group-item">
              Inférmense acerca de las fases de acercamiento.
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            3. Mochila de Emergencia:
          </h6>
          Consiste en tener fácil y rápido acceso a una mochila en la que tengas
          herramientas para procurar su bienestar. Se recomienda como contenidos
          de la mochila:
          <ul class="list-group">
            <li class="list-group-item">Botiquín de emergencia.</li>
            <li class="list-group-item">
              Radio de pilas, con los repuestos necesarios.
            </li>
            <li class="list-group-item">Lámpara</li>
            <li class="list-group-item">Agua</li>
            <li class="list-group-item">
              Comida enlatada para, al menos, 48 horas.
            </li>
            <li class="list-group-item">
              Documentos personales (acta de nacimiento, matrimonio, cartilla,
              papeles agrarios, identificaciones, CURP, etc.) guardados en
              bolsas de pl�stico.
            </li>
            <img className="img-container" alt="img" src={mochila} />
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            4. Detecta los riesgos de tu hogar:{' '}
          </h6>
          <ul class="list-group">
            <li class="list-group-item">
              Si la vivienda es fr�gil y de materiales ligeros (carrizo, palapa,
              adoba, paja o materiales semejantes), prepara un plan para
              desalojarla.
            </li>
            <li class="list-group-item">
              Localiza y se�ala la ubicaci�n de: substancias inflamables
              almacenadas, tanques de gas, tomas el�ctricas, etc. Fije y amarre
              bien lo que el viento podr�a lanzar.{' '}
            </li>
            <li class="list-group-item">
              Guarde objetos sueltos como macetas, botes de basura,
              herramientas, etc.
            </li>
            <li class="list-group-item">
              Verifique que las atarjeas cercanas se encuentren en buen estado y
              libres de objetos que puedan obstruir el flujo del agua.
            </li>
            <li class="list-group-item">
              De tener pozo o aljibe, selle la tapa con mezcla de cemento para
              tener agua de reserva no contaminada.
            </li>
            <li class="list-group-item">
              De ser posible, realiza reparaciones necesarias en techos y
              ventanas para evitar da�os mayores.
            </li>
            <img className="img-container" alt="img" src={revisar} />
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            5. Ubica los refugios cercanos a tu localidad:{' '}
          </h6>
          <ul class="list-group">
            <li class="list-group-item">
              Esto lo puedes lograr consultando el mapa interactivo de Hurakan�t
              en donde podr�s hallar la ubicaciín precisa de cada refugio cerca
              de tu localidad. También puedes consultar la informaci�n
              proporcionada por protecci�n civil de tu estado o informarte por
              medio de los n�meros de atención.
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Durante el Cicl�n</h5>
          <ul class="list-group">
            <li class="list-group-item">
              Evac�a la zona o construcciones de riesgo.
            </li>
            <li class="list-group-item">
              Acude al refugio temporal en caso de ser necesario.
            </li>
            <li class="list-group-item">
              Suspende actividades de navegaci�n mar�tima, as� como el tr�nsito
              vehicular por carreteras y autopistas.
            </li>

            <li class="list-group-item">
              Sintoniza la radio port�til para obtener informaci�n o
              instrucciones relativas al cicl�n.
            </li>
            <li class="list-group-item">
              Desconecta todos tus aparatos electr�nicos, as� como el
              interruptor de energ�a.
            </li>
            <li class="list-group-item">Cierra las llaves de gas y agua.</li>
            <li class="list-group-item">
              Utiliza l�mparas de pilas, no velas.
            </li>
            <li class="list-group-item">
              Vigila constantemente el nivel del agua cercano a tu casa y/o
              refugio temporal.
            </li>
            <li class="list-group-item">
              No salgas del refugio temporal hasta que las autoridades informen
              que termin� el peligro.
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            2. Genera un plan de protecci�n civil para tu familia y amigos que
            incluya:
          </h6>
          <ul class="list-group">
            <li class="list-group-item">
              Cierre puertas y ventanas, protegiendo internamente los cristales
              con cinta adhesiva en forma de X.
            </li>
            <li class="list-group-item">
              No abra cortinas, �stas pueden protegerlo de cualquier
              astillamiento de cristales.
            </li>
            <li class="list-group-item">
              Tenga a la mano su mochila de emergencia.
            </li>

            <li class="list-group-item">
              No prenda velas ni veladoras; use s�lo l�mparas de pilas.
            </li>
            <li class="list-group-item">
              Si el viento abre una puerta o ventana, no avance hac�a ella de
              manera frontal.
            </li>
            <li class="list-group-item">
              De no ser necesario, no salga de su casa.{' '}
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">
            Si decidi� dirigirse a un refugio temporal:
          </h6>
          <ul class="list-group">
            <li class="list-group-item">
              Atienda las indicaciones del personal capacitado.
            </li>

            <li class="list-group-item">
              No salga hasta que las autoridades se lo indiquen.
            </li>
            <img className="img-container" alt="img" src={refugio} />
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Durante el Cicl�n</h5>
          <ul class="list-group">
            <li class="list-group-item">
              Evac�a la zona o construcciones de riesgo.
            </li>
            <li class="list-group-item">
              Acude al refugio temporal en caso de ser necesario.
            </li>
            <li class="list-group-item">
              Suspende actividades de navegaci�n mar�tima, as� como el tr�nsito
              vehicular por carreteras y autopistas.
            </li>

            <li class="list-group-item">
              Sintoniza la radio port�til para obtener informaci�n o
              instrucciones relativas al cicl�n.
            </li>
            <li class="list-group-item">
              Desconecta todos tus aparatos electr�nicos, as� como el
              interruptor de energ�a.
            </li>
            <li class="list-group-item">Cierra las llaves de gas y agua.</li>
            <li class="list-group-item">
              Utiliza l�mparas de pilas, no velas.
            </li>
            <li class="list-group-item">
              Vigila constantemente el nivel del agua cercano a tu casa y/o
              refugio temporal.
            </li>
            <li class="list-group-item">
              No salgas del refugio temporal hasta que las autoridades informen
              que termin� el peligro.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MedidasComp;
