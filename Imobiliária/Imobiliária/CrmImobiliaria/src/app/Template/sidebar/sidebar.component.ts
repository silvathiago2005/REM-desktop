import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { $ } from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  show:boolean = false;
  facog:any;
  collapseGerenciamento: boolean = false;
  collapseCadastro: string = 'closed';
  collapseAnalise: string = 'closed';
  collapseRelatorio: string = 'closed';
  collapseGraficos: string = 'closed';
  idUsuario: number = 1;

  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.facog = faCog; 
  }

  isCollapse(){
    // $('#homeSubmenu').collapse();
  }

  isLoggedin(): boolean{
    return true;
  }

  acaoSidebar(){
    this.show == false? this.show = true: this.show = false;
  }

}
