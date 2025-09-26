import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',   // 👈 RELATIVO, sem barra na frente
  styleUrls: ['./app.css']     // opcional
})
export class App {}
