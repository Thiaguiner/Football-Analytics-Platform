import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <- importe aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';
import { TimesComponent } from './times/times.component';
import { ConfrontosComponent } from './confrontos/confrontos.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, TabelaComponent, TimesComponent, ConfrontosComponent, NavbarComponent,  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, AutoCompleteModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
