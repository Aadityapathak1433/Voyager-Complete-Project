import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SelectsImgComponent } from './selects-img/selects-img.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {WeatherComponent} from './weather/weather.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from 'src/weather.service';
import { CardsComponent } from './search/cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './hero/signin/signin.component';
import { SignInComponent } from './navbar/sign-in/sign-in.component';
import { AboutUsComponent } from './navbar/about-us/about-us.component';
import { ContactusComponent } from './footer/contactus/contactus.component';
import { InprogressComponent } from './search/inprogress/inprogress.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserService } from './user.service';
import { LogInComponent } from './navbar/log-in/log-in.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { AppRoutingModule } from './app-route.module';


@NgModule({
  declarations: [
    AppComponent, 
    DestinationComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    SearchComponent,
    SelectsImgComponent,
    WeatherComponent,
    CardsComponent,
    ContactUsComponent,
    SigninComponent,
    SignInComponent,
    AboutUsComponent,
    ContactusComponent,
    InprogressComponent,
    AdminComponent,
    UserListComponent,
    LogInComponent,
    UpdateUserComponent,
    ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
      ],
  providers: [WeatherService,UserService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

