import { Component, OnInit } from '@angular/core';
import { AuthService } from './../servicios/auth.service';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email
      }
      else{
        this.isLogin = false;
      }
    })
  }
  onClickLogout(){
    this.auth.logout();
  }
}
