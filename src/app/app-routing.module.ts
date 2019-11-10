import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component'
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
const routes: Routes = 
[
  {path: '', component:LandingComponent},
  {path: 'inicio', component:LandingComponent},
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistroComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'leaderboards', component:LeaderboardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
