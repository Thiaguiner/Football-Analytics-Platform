import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'; // ajuste o caminho se necessário

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string = '';


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHello().subscribe({
      next: (res: any) => {
        this.message = res.message;
      },
      error: (err: any) => {
        console.error('Erro ao buscar mensagem:', err);
      },
    });
  }
}
