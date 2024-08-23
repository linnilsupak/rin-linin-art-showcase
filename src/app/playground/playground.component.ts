import { Component, inject } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../art-work-label-popup/art-work-label-popup.component';
import { ArtworkLabel } from '../core/models/artwork-label.model';
import { TranslateModule } from '@ngx-translate/core';
import { title } from 'process';
import { GalleryRoom } from '../core/models/gallery-room.model';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  matDialog = inject(MatDialog);
  galleryRoom: GalleryRoom = {
    furryPic: {
      picUrl: '/assets/images/playground/artfight2024/furry_rin_linin.png',
      frameStyle: 'black-frame circle small',
      content: {
        title: 'Sanchos วาดโดย Rin Linin',
        title2: 'ตัวละครของ Mercanaryscrapcore',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพ Ferry ที่รินลองวาดครั้งแรก'
      }
    },
    rioniPic: {
      picUrl: '/assets/images/playground/artfight2024/rioni_rin_linin.png',
      frameStyle: 'white-frame small',
      content: {
        title: 'Remi วาดโดย Rin Linin',
        title2: 'ตัวละครของ Rioni',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองใช้เทคนิคฉีดเสปรย์น้ำเปล่าลงบนภาพสีน้ำที่ยังไม่แห้งดูค่ะ'
      }
    },
    mobiasPic: {
      picUrl: '/assets/images/playground/artfight2024/mobias_rin_linin.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Mobias วาดโดย Rin Linin',
        title2: 'ตัวละครของ Gyyuks',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองเอียงกระดาษขณะที่สียังไม่แห้งให้เป็นทางน้ำไหล ซึ่งเป็นเทคนิคที่ใช้ได้เฉพาะกระดาษแผ่นเรียบเท่านั้น'
      }
    },
    charlottePic: {
      picUrl: '/assets/images/playground/artfight2024/red_rin_linin.png',
      frameStyle: 'black-frame small',
      content: {
        title: 'Charlotte วาดโดย Rin Linin',
        title2: 'ตัวละครของ ChocolateProgram',
        subTitle: 'ภาพสีไม้',
        description: 'ภาพสไตล์วิกตอเรียก็ต้องสีไม้ซิ สุดคลาสสิก'
      }
    },
    mirmirPic: {
      picUrl: '/assets/images/playground/artfight2024/paga_rin_linin.jpg',
      frameStyle: 'black-frame',
      content: {
        title: 'Mirmir วาดโดย Rin Linin',
        title2: 'ตัวละครของ latteswiirl',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพที่รินลองลงสีแบบเปรอะเปื้อน สไตล์ฝันๆลงบนกระดาษสีน้ำแผ่นเรียบ'
      }
    },
    new: {
      picUrl: '',
      frameStyle: '',
      content: {
        title: '',
        title2: '',
        subTitle: '',
        description: ''
      }
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
