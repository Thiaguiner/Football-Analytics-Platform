import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ajuste o caminho se for diferente

const routes: Routes = [
  { path: '', component: HomeComponent }, // rota raiz
  // você pode adicionar mais rotas depois se quiser
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
