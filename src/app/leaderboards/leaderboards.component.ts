import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'; 
import { AngularFirestoreModule } from "angularfire2/firestore";
import { UserInterface }from './../models/user-interface';
import * as firebase from 'firebase/app';
import { subscribeToResult } from 'rxjs/internal-compatibility';
import { AuthService } from './../servicios/auth.service';
@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  
  constructor(private auth: AuthService) { 
    
  }
  user:UserInterface = {
    scores:[]
  }
  ngOnInit() {
    //this.auth.getAuth().subscribe(user =>{
    //if (user){
      var db = firebase.database();
     var ref = db.ref("usuarios");
     // var res = "";
     // var str;
    //if (this.user != null) {
      ref.orderByChild("usuarios").on("child_changed", function(snapshot) {
      //console.log(snapshot.key + " was " + snapshot.val().score + " meters tall");
      this.user.scores.push(4);
    //});
  //}
  //else {
    //  console.log("hola");
      //}
    //}
  });
}
  
  
}
