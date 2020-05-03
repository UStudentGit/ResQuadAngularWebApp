import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// my own components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-panel/header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateEventComponent } from './main-panel/create-event/create-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSelectionComponent } from './main-panel/home/menu-selection/menu-selection.component';
import { TableComponent } from './main-panel/home/table/table.component';
import { HomeComponent } from './main-panel/home/home.component';
import { JoinToEventComponent } from './main-panel/join-to-event/join-to-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPanelComponent,
    LogInComponent,
    SignUpComponent,
    CreateEventComponent,
    MenuSelectionComponent,
    TableComponent,
    HomeComponent,
    JoinToEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
