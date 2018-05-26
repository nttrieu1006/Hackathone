import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDaQZENKuTcAUSQYlspjyc5N9bjuWGgUYk",
      authDomain: "htteam-a38d7.firebaseapp.com",
      databaseURL: "https://htteam-a38d7.firebaseio.com",
      projectId: "htteam-a38d7",
      storageBucket: "htteam-a38d7.appspot.com",
      messagingSenderId: "822268154544"
  }
};
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
