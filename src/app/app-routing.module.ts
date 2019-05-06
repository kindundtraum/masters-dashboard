import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignTextsComponent } from './campaign-texts/campaign-texts.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
    { path: '', redirectTo: '/party', pathMatch: 'full' },
    { path: 'campaign-texts', component: CampaignTextsComponent },
    { path: 'party', component: PartyComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
