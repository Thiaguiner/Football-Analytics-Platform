import { Component, OnInit } from '@angular/core';
import { ApiService } from '../home/services/api.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  tabela: any[] = []
  ano: number = 2023
  anos: number[] = []
  constructor(private apiService: ApiService){}
  
  ngOnInit(): void {
    for (let ano = 2023; ano >=2003; ano--){
      this.anos.push(ano)
    }
    this.buscarTabela()
  }
  buscarTabela() {
    if(!this.ano) return
    this.apiService.getTabela(this.ano).subscribe(data => {
      this.tabela = data.content
      console.log(this.tabela)
    })
  }

}
