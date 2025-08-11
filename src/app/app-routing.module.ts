import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ajuste o caminho se for diferente
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // rota raiz
  { path: '', component: TabelaComponent }, // rota raiz
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
