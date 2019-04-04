import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTextsComponent } from './campaign-texts.component';

describe('CampaignTextsComponent', () => {
  let component: CampaignTextsComponent;
  let fixture: ComponentFixture<CampaignTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
