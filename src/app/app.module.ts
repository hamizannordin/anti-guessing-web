import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetComponent } from './bet/bet.component';
import { CompetitionComponent } from './competition/competition.component';
import { DrawComponent } from './draw/draw.component';
import { WinnerComponent } from './winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    BetComponent,
    CompetitionComponent,
    DrawComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
