import { Component, OnInit } from '@angular/core';
import { CampaignText } from './campaignText';

@Component({
  selector: 'app-campaign-texts',
  templateUrl: './campaign-texts.component.html',
  styleUrls: ['./campaign-texts.component.css']
})

export class CampaignTextsComponent implements OnInit {

  lsVarName: 'masters-dashboard.campaign.text'

  campaignTextList

  constructor() { }

  ngOnInit() {
      let campaignText = new CampaignText()
      campaignText.id = 1
      campaignText.name = 'Приветствие'
      campaignText.stage = 'Начало'
      campaignText.text = 'Приветствую вас, приключенцы!'

      localStorage.setItem(this.lsVarName, JSON.stringify([campaignText, campaignText]))

      this.campaignTextList = JSON.parse(localStorage.getItem(this.lsVarName));
  }

}
