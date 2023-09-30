import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExperienciaComponent } from './template/experiencia/page/experiencia.component';
import { FormacaoComponent } from './template/formacao/page/formacao.component';
import { SobreMimComponent } from './template/sobre-mim/page/sobre-mim.component';
import { ProjetosComponent } from './template/projetos/page/projetos.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    FormacaoComponent,
    SobreMimComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
