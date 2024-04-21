import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelRegisterComponent } from './Components/Imovel/imovel-register/imovel-register.component';
import { ListImoveisComponent } from './Components/Imovel/list-imoveis/list-imoveis.component';
import { ShowImovelComponent } from './Components/Imovel/show-imovel/show-imovel.component';
import { ListLocacaoComponent } from './Components/Locacao/list-locacao/list-locacao.component';
import { RegisterLocacaoComponent } from './Components/Locacao/register/register.component';
import { ShowLocacaoComponent } from './Components/Locacao/show-locacao/show-locacao.component';
import { ListLocatarioComponent } from './Components/locatario/list-locatario/list-locatario.component';
import { LocatarioRegisterComponent } from './Components/locatario/locatario-register/locatario-register.component';
import { ShowLocatarioComponent } from './Components/locatario/show-locatario/show-locatario.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MainRelatoriosComponent } from './Components/Relatorios/main-relatorios/main-relatorios.component';
import { RelatorioComponent } from './Components/Relatorios/relatorio/relatorio.component';
import { ListLocadorComponent } from './Components/User/list-locador/list-locador.component';
import { LocadorRegisterComponent } from './Components/User/locador-register/locador-register.component';
import { ShowLocadorComponent } from './Components/User/show-locador/show-locador.component';

const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'VisualizarLocador', component: ShowLocadorComponent},
  { path: 'ListarLocador', component: ListLocadorComponent},
  { path: 'RegistrarLocador', component: LocadorRegisterComponent},
  { path: 'VisualizarLocatario', component: ShowLocatarioComponent},
  { path: 'ListarLocatario', component: ListLocatarioComponent},
  { path: 'RegistrarLocatario', component: LocatarioRegisterComponent},
  { path: 'VisualizarImovel', component: ShowImovelComponent},
  { path: 'ListarImoveis', component: ListImoveisComponent},
  { path: 'RegistrarImovel', component: ImovelRegisterComponent},
  { path: 'VisualizarLocacao', component: ShowLocacaoComponent},
  { path: 'ListarLocacoes', component: ListLocacaoComponent},
  { path: 'RegistrarLocacao', component: RegisterLocacaoComponent},
  { path: 'Relatorios', component: MainRelatoriosComponent},
  { path: 'Relatorio', component: RelatorioComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
