import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienciaComponent} from "./template/experiencia/page/experiencia.component";
import {FormacaoComponent} from "./template/formacao/page/formacao.component";
import {SobreMimComponent} from "./template/sobre-mim/page/sobre-mim.component";
import {ProjetosComponent} from "./template/projetos/page/projetos.component";

const routes: Routes = [
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'formacao', component: FormacaoComponent},
  {path: 'sobre', component:SobreMimComponent},
  {path: 'projetos', component:ProjetosComponent},
  {
    path: '', redirectTo: 'sobre', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
