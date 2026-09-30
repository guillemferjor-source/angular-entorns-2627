/*Aquest fitxer conté la lògica: propietats, mètodes, getters...*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta', /* Per usar-lo al HTML d'altres components, com una etiqueta HTML personalitzada*/
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {

}

/* INTERPOLACIÓ DE DADES {{}} */

/*
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions dins de l'HTML, angular avalua l'expressió i mostra el resultat com a text.

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra 5
{{text.toUpperCase()}} --> mostra el text en majúscules
{{edat >= 18 ? 'Major d'edat' : 'Menor d'edat'}} --> operador ternari
*/