import { Component, OnInit } from '@angular/core';
import { ApiService } from '../home/services/api.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  tabela: any[] = []
  ano: any

  constructor(private apiService: ApiService){}
  
  ngOnInit(): void {
    
  }
  buscarTabela() {
    this.apiService.getTabela(this.ano).subscribe(data => {
      this.tabela = data
      console.log(data)
    })
  }

}
