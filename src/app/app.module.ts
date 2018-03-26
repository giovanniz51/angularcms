import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; //import AngularFire2
import { AngularFireDatabaseModule } from 'angularfire2/database'; //import AngularFire2 Database Module
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment.prod';


import { AppComponent } from './app.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AppRoutingModule } from './app-routing.module';

import { AfService } from './providers/af.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    AppNavbarComponent,
    HomePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // import AngularFire2 Module with configuration in environment.ts
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
