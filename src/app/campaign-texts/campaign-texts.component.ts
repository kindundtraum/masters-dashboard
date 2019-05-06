import { Component, OnInit } from '@angular/core';
import { CampaignText } from './campaignText';

@Component({
  selector: 'app-campaign-texts',
  templateUrl: './campaign-texts.component.html',
  styleUrls: ['./campaign-texts.component.css']
})

export class CampaignTextsComponent implements OnInit {

  static lsVarName = 'masters-dashboard.campaign.text'

  campaignTextList

  constructor() { }

  ngOnInit() {
      this.loadFromStorage()
      setInterval( this.saveToLocalStorage.bind(this) , 3000 )
  }

  loadFromStorage() {
      let itemList = localStorage.getItem(CampaignTextsComponent.lsVarName)
      if (!itemList) {
          itemList = "{}"
      }
      this.campaignTextList = JSON.parse(itemList)
  }

  addText(): void {
      const ct = new CampaignText()
      ct.id = this.generateUniqueId()
      console.log(this.campaignTextList)
      this.campaignTextList[ct.id] = ct
      this.saveToLocalStorage()
  }

  saveToLocalStorage() {
      localStorage.setItem(CampaignTextsComponent.lsVarName, JSON.stringify(this.campaignTextList))
  }

  removeText(campaignText: CampaignText): void {
      delete(this.campaignTextList[campaignText.id])
      this.saveToLocalStorage()
  }

  generateUniqueId(): string {
      return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
  }
}
