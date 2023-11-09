import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
