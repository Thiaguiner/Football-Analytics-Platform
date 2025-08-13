import { Component, OnInit } from '@angular/core';
import { ApiService } from '../home/services/api.service';

@Component({
  selector: 'app-confrontos',
  templateUrl: './confrontos.component.html',
  styleUrls: ['./confrontos.component.css']
})
export class ConfrontosComponent implements OnInit {
  time1: string = '';
  time2: string = '';
  times: any[] = [];
  lenVitoriasTime1: number = 0
  lenVitoriasTime2: number = 0
  lenEmpates: number = 0

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  confrontos() {
    if (!this.time1 || !this.time2) return;

    const timeFormatado1 = this.formatarNome(this.time1);
    const timeFormatado2 = this.formatarNome(this.time2);

    this.apiService.getConfrontos(timeFormatado1, timeFormatado2).subscribe(data => {
      this.times = data.content;
      this.lenVitoriasTime1 = this.times.filter((item: any) => item.resultado_time1 === 'Vitória').length;
      this.lenVitoriasTime2 = this.times.filter((item: any) => item.resultado_time2 === 'Vitória').length;
      this.lenEmpates = this.times.filter((item: any) => item.resultado_time1 === 'Empate').length;

      console.log(this.times);
      console.log(this.lenVitoriasTime1)
      console.log(this.lenVitoriasTime2)
      console.log(this.lenEmpates)
    });
  }

  private formatarNome(nome: string): string {
    return nome
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
