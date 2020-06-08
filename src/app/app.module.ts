import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// my own components, modules:
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-panel/header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateEventComponent } from './main-panel/create-event/create-event.component';
import { MenuSelectionComponent } from './main-panel/home/menu-selection/menu-selection.component';
import { TableComponent } from './main-panel/home/table/table.component';
import { HomeComponent } from './main-panel/home/home.component';
import { JoinToEventComponent } from './main-panel/join-to-event/join-to-event.component';
import { AddTokenInterceptor } from './_services/add-token.interceptor';
import { TableEventsComponent } from './main-panel/create-event/table-events/table-events/table-events.component';
import { AddEventComponent } from './main-panel/add-event/add-event.component';
import { BoxAddEventComponent } from './main-panel/add-event/box-add-event/box-add-event.component';
import { RoomsComponent } from './main-panel/rooms/rooms.component';

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
    JoinToEventComponent,
    TableEventsComponent,
    AddEventComponent,
    BoxAddEventComponent,
    RoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
