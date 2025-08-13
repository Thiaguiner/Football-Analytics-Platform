import { Component, OnInit } from '@angular/core';
import { ApiService } from '../home/services/api.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit{
  time: string = ''
  info: any[] = []
  
  constructor (private apiService: ApiService){  }

  ngOnInit(): void {
    
  }
  informacoesTime() {
    if (!this.time) return;

    const timeFormatado = this.time
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    this.apiService.getInfoTimes(timeFormatado).subscribe(data => {
      this.info = data.content;
      console.log(this.info);
    });
  }
}
