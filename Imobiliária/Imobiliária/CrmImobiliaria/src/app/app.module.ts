import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './Template/template.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListLocadorComponent } from './Components/User/list-locador/list-locador.component';
import { LocadorRegisterComponent } from './Components/User/locador-register/locador-register.component';
import { ListLocatarioComponent } from './Components/locatario/list-locatario/list-locatario.component';
import { LocatarioRegisterComponent } from './Components/locatario/locatario-register/locatario-register.component';
import { ListImoveisComponent } from './Components/Imovel/list-imoveis/list-imoveis.component';
import { ImovelRegisterComponent } from './Components/Imovel/imovel-register/imovel-register.component';
import { RegisterLocacaoComponent } from './Components/Locacao/register/register.component';
import { ListLocacaoComponent } from './Components/Locacao/list-locacao/list-locacao.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ShowLocadorComponent } from './Components/User/show-locador/show-locador.component';
import { ShowLocatarioComponent } from './Components/locatario/show-locatario/show-locatario.component';
import { ShowLocacaoComponent } from './Components/Locacao/show-locacao/show-locacao.component';
import { ShowImovelComponent } from './Components/Imovel/show-imovel/show-imovel.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { RouterModule } from '@angular/router';
import { MainRelatoriosComponent } from './Components/Relatorios/main-relatorios/main-relatorios.component';
import { RelatorioComponent } from './Components/Relatorios/relatorio/relatorio.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    ListLocadorComponent,
    LocadorRegisterComponent,
    ListLocatarioComponent,
    LocatarioRegisterComponent,
    ListImoveisComponent,
    ImovelRegisterComponent,
    RegisterLocacaoComponent,
    ListLocacaoComponent,
    PageNotFoundComponent,
    ShowLocadorComponent,
    ShowLocatarioComponent,
    ShowLocacaoComponent,
    ShowImovelComponent,
    MainpageComponent,
    MyLineChartComponent,
    MainRelatoriosComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TemplateModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgbModule,
    ChartsModule,
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
