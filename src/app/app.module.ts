import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenDescription } from './pipes/shortenDescription';
import { MovieModalComponent } from './movie-modal/movie-modal.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MoviePageComponent,
    ShortenDescription,
    MovieModalComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
