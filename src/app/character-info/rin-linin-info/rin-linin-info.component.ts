import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";
import { ArtworkLabel } from '../../core/models/artwork-label.model';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";

@Component({
  selector: 'app-rin-linin-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent, ImageSrcsetPipe],
  templateUrl: './rin-linin-info.component.html',
  styleUrl: './rin-linin-info.component.scss'
})
export class RinLininInfoComponent {
  private matDialog = inject(MatDialog);
  rinLininRoom: ArtworkLabel[] = [
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_face_jubu.jpeg?v=1',
      frameStyle: 'white-frame small circle',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองวาดท่าแปลกๆแนวจุบุ๊ๆ'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_face_cry.jpeg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองวาดประกายเยอะๆด้วยสีน้ำดู'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_witch_shop.jpeg',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองแนวปกนิยายดู'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_thai_traditional_dress.jpeg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'อยากลองวาดชุดไทยดู เลยเอามาลองกับ persona ตัวเอง'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_star_sea.jpeg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'ทดลองลงสีท้องฟ้าและทะเลแบบออโรร่านะ ทำตามวีดีโอ Youtube จ้า'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_flower_garden.jpeg',
      frameStyle: 'white-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'ไปเที่ยว Team Lab ที่ญี่ปุ่นมา ก็เลยอยากวาดฉากแบบนี้'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_face.jpeg',
      frameStyle: 'black-frame small mini-frame-200 me-auto',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'นึกไรไม่ออกก็เลยวาดท่านั่งคิดว่าจะเขียนอะไรดี ฮ่าๆ'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_nurse.jpeg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'เคยนึกๆอยากทำเกมที่มีตัวเอกเป็นนางพยาบาล ก็เลยเอามาลองวาดบน persona ตัวเองซะเลย'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
    {
      picUrl: '/assets/images/original/rin-linin/rin_linin_read_book.jpeg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin',
        title2: 'วาดโดย Rin Linin',
        subTitle: 'ภาพสีน้ำ',
        description: 'นึกไรไม่ออกก็เลยวาดท่านั่งคิดว่าจะเขียนอะไรดี ฮ่าๆ'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit'
      }
    },
  ]

}
