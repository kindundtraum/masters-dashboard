import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CampaignTextsComponent } from './campaign-texts/campaign-texts.component';
import { AppRoutingModule } from './app-routing.module';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignTextsComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
