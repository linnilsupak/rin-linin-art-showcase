import { Component, inject } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../art-work-label-popup/art-work-label-popup.component';
import { ArtworkLabel } from '../core/models/artwork-label.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  matDialog = inject(MatDialog);
  galleryRoom = {
    furryPic: {
      picUrl: '/assets/images/playground/artfight2024/furry_rin_linin.png',
      frameStyle: 'black-frame circle small',
      content: {
        title: 'Sanchos วาดโดย Rin Linin',
        title2: 'character ของ Mercanaryscrapcore',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพ Ferry ที่รินลองวาดครั้งแรก'
      }
    },
    rioniPic: {
      picUrl: '/assets/images/playground/artfight2024/rioni_rin_linin.png',
      frameStyle: 'white-frame small',
      content: {
        title: 'Remi วาดโดย Rin Linin',
        title2: 'character ของ Rioni',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองใช้เทคนิคฉีดเสปรย์น้ำเปล่าลงบนภาพสีน้ำที่ยังไม่แห้งดูค่ะ'
      },
    }
  }

  openArtWorkLabel({ picUrl, frameStyle, content}: ArtworkLabel) {
    this.matDialog.open(ArtWorkLabelPopupComponent, {
      panelClass: 'art-work-label',
      autoFocus: false,
      data: {
        picUrl, frameStyle, content
      }
    });
  }

}
