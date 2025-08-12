import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'; // ajuste o caminho se necessário
import { Event,  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string = '';
  mostrarTabela = false;


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }
  mostrarComponentTabela(event: MouseEvent){
    event.preventDefault();
    this.mostrarTabela = true;
  }
}