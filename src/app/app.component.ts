import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarTabela = false;

  mostrarComponentTabela(event: Event){
    event.preventDefault();
    this.mostrarTabela =true
  }
}
