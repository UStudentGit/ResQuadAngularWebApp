import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateEventComponent } from './main-panel/create-event/create-event.component';
import { HomeComponent } from './main-panel/home/home.component';
import { JoinToEventComponent } from './main-panel/join-to-event/join-to-event.component';


const routes: Routes = [
  { path: '', component: MainPanelComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'createEvent', component: CreateEventComponent },
      { path: 'joinToEvent', component: JoinToEventComponent }
    ] },
  { path: 'signUp', component: SignUpComponent },
  { path: 'logIn', component: LogInComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
