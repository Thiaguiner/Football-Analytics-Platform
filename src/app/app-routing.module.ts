import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ajuste o caminho se for diferente
import { TabelaComponent } from './tabela/tabela.component';
import { TimesComponent } from './times/times.component';
import { ConfrontosComponent } from './confrontos/confrontos.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // rota raiz
  { path: 'tabela', component: TabelaComponent }, // rota tabela/classificação
  { path: 'times', component: TimesComponent }, // rota times;info
  { path: 'confrontos', component: ConfrontosComponent }, // rota times;info

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
