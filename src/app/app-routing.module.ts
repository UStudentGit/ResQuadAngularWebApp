import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyEventsComponent } from './main-panel/my-events/my-events.component';
import { HomeComponent } from './main-panel/home/home.component';
import { JoinToEventComponent } from './main-panel/join-to-event/join-to-event.component';
import { AddEventComponent } from './main-panel/add-event/add-event.component';
import { RoomsComponent } from './main-panel/rooms/rooms.component';



const routes: Routes = [
  { path: '', component: MainPanelComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'myEvents', component: MyEventsComponent },
      { path: 'joinToEvent', component: JoinToEventComponent },
      { path: 'addEvent', component: AddEventComponent },
      { path: 'rooms', component: RoomsComponent },
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
