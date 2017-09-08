import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBLyYXzXj-4Sj6jfEUi0MbsKl8NqsIqZX8',
  authDomain: 'quickstart-f83b2.firebaseapp.com',
  databaseURL: 'https://quickstart-f83b2.firebaseio.com',
  storageBucket: 'quickstart-f83b2',
  messagingSenderId: '439339806256'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
