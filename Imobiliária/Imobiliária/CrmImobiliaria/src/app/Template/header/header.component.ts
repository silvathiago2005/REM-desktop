import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: string = 'Thiago Lopes da Silva';

  constructor() { }

  ngOnInit(): void {
  }

  isLoggedin(): boolean {
    // this.user$ = this.authService.isLoggedin()
    // this.translate.use(localStorage.getItem('language'))
    // if (this.user$) 
    return true;
  }

  ModificarSenha(){
    // this.router.navigateByUrl('/GerenciarSenha');
  }

  Login(){}

  logoff(){

  }
}
