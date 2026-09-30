import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './Tageta/tarjeta';
import { Perfil } from './components/Perfil/perfil'; // 1. IMPORTANTE: Importamos Perfil

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Tarjeta, Perfil], // 2. IMPORTANTE: Añadimos Perfil aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'angular-entorns-2627';
}