import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TextformComponent } from './textform/textform.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { EncryptComponent } from './encrypt/encrypt.component';
import { EventdComponent } from './eventd/eventd.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'textform', component: TextformComponent},
  {path: 'encrypt', component: EncryptComponent},
  {path: 'tictactoe', component: TictactoeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TextformComponent,
    EncryptComponent,
    EventdComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
