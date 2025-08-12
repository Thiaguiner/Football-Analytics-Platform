import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ajuste o caminho se for diferente
import { TabelaComponent } from './tabela/tabela.component';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // rota raiz
  { path: 'tabela', component: TabelaComponent }, // rota tabela/classificação
  { path: 'times', component: TimesComponent }, // rota tabela/classificação
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
