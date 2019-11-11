import { Component, OnInit } from '@angular/core';
import { AuthService } from './../servicios/auth.service';
import { UserInterface }from './../models/user-interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private auth: AuthService) { }

  user: UserInterface = {
    name : '',
    email : '',
    photoUrl : '',
    level : 0.0,
    scores: [],
  }

  ngOnInit() {
    this.auth.getAuth().subscribe(user =>{
      if (user){
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.user.level = 0;
        this.user.scores = [];
      }
    })
  }

}
