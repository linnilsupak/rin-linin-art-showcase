import { Component, inject } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../art-work-label-popup/art-work-label-popup.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  matDialog = inject(MatDialog);
  galleryRoom = {
    furryPic: {
      picUrl: '/assets/images/playground/artfight2024/furry_rin_linin.png',
      frameStyle: 'black-frame circle small',
      title: 'Sanchos วาดโดย Rin Linin',
      title2: 'character ของ Mercanaryscrapcore',
      subTitle: 'ภาพสีน้ำ',
      description: 'ภาพ Ferry ที่รินลองวาดครั้งแรก'
    }
  }

  openArtWorkLabel({ picUrl, frameStyle, title, title2, subTitle, description }: { picUrl: string, frameStyle: string, title: string, title2?: string, subTitle: string, description: string }) {
    this.matDialog.open(ArtWorkLabelPopupComponent, {
      panelClass: 'art-work-label',
      autoFocus: false,
      data: {
        picUrl, frameStyle, title, title2, subTitle, description
      }
    });
  }

}
