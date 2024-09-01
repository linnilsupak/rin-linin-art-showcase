import { Component, inject } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../art-work-label-popup/art-work-label-popup.component';
import { ArtworkLabel } from '../core/models/artwork-label.model';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoom } from '../core/models/gallery-room.model';
import { ImageSrcsetPipe } from "../core/pipe/image-srcset.pipe";
import { ImagePreviewPipe } from "../core/pipe/image-preview.pipe";
import { AddClassInViewportDirective } from '../core/add-class-in-viewport.directive';
import { AddClassOnScrollPositionDirective } from '../core/add-class-on-scroll-position.directive';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, ImageSrcsetPipe, ImagePreviewPipe, AddClassInViewportDirective, AddClassOnScrollPositionDirective],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  matDialog = inject(MatDialog);
  galleryRoom: GalleryRoom = {
    furryPic: {
      picUrl: '/assets/images/playground/artfight2024/sanchos_rin_linin.png',
      frameStyle: 'black-frame circle small',
      content: {
        title: 'Sanchos วาดโดย Rin Linin',
        title2: 'ตัวละครของ Mercanaryscrapcore',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพ Ferry ที่รินลองวาดครั้งแรก'
      }
    },
    rioniPic: {
      picUrl: '/assets/images/playground/artfight2024/remi_rin_linin.png',
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
      picUrl: '/assets/images/playground/artfight2024/charlotte_rin_linin.png',
      frameStyle: 'black-frame small',
      content: {
        title: 'Charlotte วาดโดย Rin Linin',
        title2: 'ตัวละครของ ChocolateProgram',
        subTitle: 'ภาพสีไม้ผสมสีน้ำ',
        description: 'ภาพสไตล์วิกตอเรียก็ต้องสีไม้ซิ สุดคลาสสิก'
      }
    },
    mirmirPic: {
      picUrl: '/assets/images/playground/artfight2024/mirmir_rin_linin.jpg',
      frameStyle: 'black-frame',
      content: {
        title: 'Mirmir วาดโดย Rin Linin',
        title2: 'ตัวละครของ latteswiirl',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพที่รินลองลงสีแบบเปรอะเปื้อน สไตล์ฝันๆลงบนกระดาษสีน้ำแผ่นเรียบ'
      }
    },
    herianPic: {
      picUrl: '/assets/images/playground/artfight2024/herian_rin_linin.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Herian วาดโดย Rin Linin',
        title2: 'ตัวละครของ ecobotanist',
        subTitle: 'ภาพสีน้ำ',
        description: 'ภาพนี้ก็ลองใช้การลงสีแบบเปรอะๆเปื้อนๆ สไตล์ okayuuri ที่เน้นลายเส้นและความโปร่งใสของสีน้ำค่ะ'
      }
    },
    idkPic: {
      picUrl: '/assets/images/playground/artfight2024/idk_rin_linin.png',
      frameStyle: 'black-frame circle',
      content: {
        title: 'IDK วาดโดย Rin Linin',
        title2: 'Blastoffspaceboy',
        subTitle: 'ภาพลายเส้นปากกา',
        description: 'ภาพนี้วาดโดยลากปากกาแบบไม่ยกเลยค่ะ แต่ก็มีแอบเอาปากกามาเติมนิดๆหน่อยๆทีหลังนะ'
      }
    },
    monthDragonPic: {
      picUrl: '/assets/images/playground/artfight2024/month_rin_linin.jpg',
      frameStyle: 'white-frame',
      content: {
        title: 'Rosy Maple Moth Dragon วาดโดย Rin Linin',
        title2: 'ตัวละครของ amesketches',
        subTitle: 'ภาพเส้นดินสอ',
        description: 'ลองตัวอะไรที่ไม่ใช่คน หรือมีความน่ารักเลยดูค่ะ วาดด้วยเส้นดินสอจะได้ดูลึกลับน่ากลัว'
      }
    },
    junePic: {
      picUrl: '/assets/images/playground/artfight2024/june_rin_linin.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'June Valeria วาดโดย Rin Linin',
        title2: 'ตัวละครของ MintKyo',
        subTitle: 'ภาพสีน้ำ',
        description: 'ลองตั้งใจลงสีบนกระดาษสีน้ำแผ่นเรียบดูค่ะ แต่เหมือนจะพลาดนิดหน่อยตรงทะเลดาวนะ'
      }
    },
    miffyPic: {
      picUrl: '/assets/images/playground/artfight2024/miffy_rin_linin.png',
      frameStyle: 'black-frame small',
      content: {
        title: 'Miffy วาดโดย Rin Linin',
        title2: 'ตัวละครของ Etheirys',
        subTitle: 'ภาพสีน้ำ',
        description: 'พยายามจะลงสีแบบลงทีละส่วน สุดท้ายลองผสมสีตุ๋นๆแล้วมันก็ออกมาแบบนี้แหละ'
      }
    },
    peejohnPic: {
      picUrl: '/assets/images/playground/artfight2024/peejohn_rin_linin.jpg',
      frameStyle: 'black-frame',
      content: {
        title: 'Peejohn วาดโดย Rin Linin',
        title2: 'ตัวละครของ LilaThAplePeela',
        subTitle: 'ภาพสีน้ำ',
        description: ''
      }
    },
    ponyPic: {
      picUrl: '/assets/images/playground/artfight2024/pony_rin_linin.gif',
      frameStyle: 'black-frame',
      content: {
        title: 'Grimm วาดโดย Rin Linin',
        title2: 'ตัวละครของ Melo_cherrii',
        subTitle: 'Clip studio paint animation',
        description: ''
      }
    },
    nebulaPic: {
      picUrl: '/assets/images/playground/artfight2024/nebula_rin_linin.jpg',
      frameStyle: 'white-frame',
      content: {
        title: 'Nebula วาดโดย Rin Linin',
        title2: 'ตัวละครของ Mirzel',
        subTitle: 'CG',
        description: ''
      }
    },
    jacarandaPic: {
      picUrl: '/assets/images/playground/artfight2024/jacaranda_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Jacaranda วาดโดย Rin Linin',
        title2: 'ตัวละครของ Kayleona',
        subTitle: '',
        description: ''
      }
    },
    alexandraPic: {
      picUrl: '/assets/images/playground/artfight2024/alexandra_rin_linin.png',
      frameStyle: 'black-frame circle',
      content: {
        title: 'Alexandra วาดโดย Rin Linin',
        title2: 'ตัวละครของ prypec',
        subTitle: '',
        description: ''
      }
    },
    haliPic: {
      picUrl: '/assets/images/playground/artfight2024/hali_rin_linin.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Hali วาดโดย Rin Linin',
        title2: 'ตัวละครของ	socsie',
        subTitle: '',
        description: ''
      }
    },
    peepPic: {
      picUrl: '/assets/images/playground/artfight2024/peep_rin_linin.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Peep วาดโดย Rin Linin',
        title2: 'ตัวละครของ Peachiepeeps',
        subTitle: '',
        description: ''
      }
    },
    rinaPic: {
      picUrl: '/assets/images/playground/artfight2024/rina_rin_linin.jpg',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rina วาดโดย Rin Linin',
        title2: 'ตัวละครของ	JazzyFina',
        subTitle: '',
        description: ''
      }
    },
    devilPic: {
      picUrl: '/assets/images/playground/artfight2024/deamon_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Deamon วาดโดย Rin Linin',
        title2: 'ตัวละครของ Duckiepu',
        subTitle: '',
        description: ''
      }
    },
    moonlitPic: {
      picUrl: '/assets/images/playground/artfight2024/moonlit_rin_linin.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Moonlit วาดโดย Rin Linin',
        title2: 'ตัวละครของ OverloadWork',
        subTitle: '',
        description: ''
      }
    },
    raccoonPic: {
      picUrl: '/assets/images/playground/artfight2024/raccoon_rin_linin.jpg',
      frameStyle: 'black-frame',
      content: {
        title: 'Fishtopher วาดโดย Rin Linin',
        title2: 'ตัวละครของ streetcatzzz',
        subTitle: '',
        description: ''
      }
    },
    alanPic: {
      picUrl: '/assets/images/playground/artfight2024/alan_rin_linin.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Alan วาดโดย Rin Linin',
        title2: 'ตัวละครของ Kai_draws_things',
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
