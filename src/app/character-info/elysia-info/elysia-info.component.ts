import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
  selector: 'app-elysia-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent],
  templateUrl: './elysia-info.component.html',
  styleUrl: './elysia-info.component.scss'
})
export class ElysiaInfoComponent {
  elysiaMyArt = [
    {
      picUrl: '/assets/images/original/elysia/elysia_ori_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Elysia',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      },
      previewPic: {
        width: '270px',
        height: '402px',
        disabled: true
      }
    }
  ];
  elysiaFanart = [{
    picUrl: '/assets/images/original/elysia/elysia_kai_draws_things2.png',
    frameStyle: 'black-frame small circle',
    content: {
      title: 'Elysia: draw by Kai draws things',
      title2: 'Original design by Rin Linin',
      subTitle: 'CG',
      description: 'This is only a thumbnail, but I really like it.'
    },
    previewPic: {
      width: '200px',
      height: '200px',
      disabled: true
    }
  },
  {
    picUrl: '/assets/images/original/elysia/elysia_Kai_draws_things.png',
    frameStyle: 'white-frame',
    content: {
      title: 'Elysia: draw by Kai draws things',
      title2: 'Original design by Rin Linin',
      subTitle: 'CG',
      description: 'I got this from Art Fight 2024, thank you for choosing to draw my Elysia!!'
    },
    previewPic: {
      width: '270px',
      height: '270px',
      disabled: true
    }
  },
  {
    picUrl: '/assets/images/original/elysia/elysia_jazzyFina.png',
    frameStyle: 'black-frame',
    content: {
      title: 'Elysia: draw by JazzyFina',
      title2: 'Original design by Rin Linin',
      subTitle: 'CG',
      description: 'I got this picture from Art Fight 2024, I really like Jazzy art, it\'s so cute.'
    },
    previewPic: {
      width: '230px',
      height: '230px',
      disabled: true
    }
  }
  ];


}
