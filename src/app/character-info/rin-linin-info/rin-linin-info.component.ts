import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";
import { ArtworkLabel } from '../../core/models/artwork-label.model';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';

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
      isRecTemplate: true,
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
      isRecTemplate: true,
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
  ];


  openRinLininChocolateProgram() {
    const artLabel = {
      picUrl: '/assets/images/original/rin-linin/rin_linin_chocolateProgram.png',
      frameStyle: 'black-frame small circle',
      content: {
        title: 'Rin Linin: draw by Chocolate Program',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like how rin linin appear with Thai traditional dress and chocolate program art style. It\'s go well with Rin Linin.'
      }
    };
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openRinLininMeri() {
    const artLabel = {
      picUrl: '/assets/images/original/rin-linin/fan_art_from_meri_kun.webp',
      frameStyle: 'black-frame',
      content: {
        title: 'Rin Linin: draw by Merikun',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'A fanart I got from my youtube channel, Owww my first fanart of my character. I just youtube once but it is so hard to post per schedule, but It not like I didn\'t get anything. At least, someone like my content and make fanart for me.^^'
      }
    };
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openRinLininPrypec() {
    const artLabel = {
      picUrl: '/assets/images/original/rin-linin/rin_linin_prypec.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: draw by Prypec',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like how Prypec Art Style. Rin Linin with her default dress by her is so wonderful.'
      }
    };
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openRinLininChocoladka() {
    const artLabel = {
      picUrl: '/assets/images/original/rin-linin/rin_linin_cookie_chocoladka.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: Art trade by Cookie Chocoladka',
        title2: 'color by Rin Linin, draw by Cookie Chocoladka',
        subTitle: 'Color Pencil',
        description: 'An Art trade I did with Cookie, I really like her picture and she look friendly so I just ask her to play and art trade with me. This picture is the result of that, I really like it.^^'
      }
    };
    openArtWorkLabel(this.matDialog, artLabel);
  }

}
