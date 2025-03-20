import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { characterInfo } from '../core/config/character-info.config';
import { TextRollinEntranceComponent } from "../shared/text-rollin-entrance/text-rollin-entrance.component";

@Component({
    selector: 'app-header',
    imports: [MatIconModule, RouterLink, RouterLinkActive, TextRollinEntranceComponent, TranslateModule],
    providers: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements  OnInit {
  @Input() minimizeFlag: boolean;
  characterInfoList = [];
  characterInfo = characterInfo;
  openMenu = false;
  characterInfoActive = false;
  commissionActive = false;


  ngOnInit(): void {
    Object.keys(this.characterInfo).forEach(key => {
      this.characterInfoList.push({ name: key, ...this.characterInfo[key]});
    });
  }

  toggleCommission() {
    this.commissionActive = !this.commissionActive;
  }

  checkIfCommisiontActive(event) {
    if (event && this.commissionActive == false) this.commissionActive = true;
  }

  toggleCharacterInfo() {
    this.characterInfoActive = !this.characterInfoActive;
  }

  checkIfCharacterInfoActive(event) {
    if (event && this.characterInfoActive == false) this.characterInfoActive = true;
  }
}
