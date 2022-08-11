import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exerciciosAngular';

  titulo = "Lista 1";
  newTitle = "";

  salvar() {
    this.titulo = this.newTitle;
  }

  limpar() {
    this.newTitle = "";
  }
}
