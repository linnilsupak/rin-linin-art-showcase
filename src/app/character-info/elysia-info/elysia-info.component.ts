import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";
import { MatDialog } from '@angular/material/dialog';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';

@Component({
  selector: 'app-elysia-info',
  standalone: true,
  imports: [TranslateModule, ImageSrcsetPipe],
  templateUrl: './elysia-info.component.html',
  styleUrl: './elysia-info.component.scss'
})
export class ElysiaInfoComponent {
  private matDialog = inject(MatDialog);

  openElysiaColor() {
    const artLabel = {
      picUrl: '/assets/images/original/elysia/elysia_ori_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Elysia',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openElysiaJazzy() {
    const artLabel = {
      picUrl: '/assets/images/original/elysia/elysia_jazzyFina.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Elysia: draw by JazzyFina',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'I got this picture from Art Fight 2024, I really like Jazzy art, it\'s so cute.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openElysiaKai1() {
    const artLabel = {
      picUrl: '/assets/images/original/elysia/elysia_Kai_draws_things.png',
      frameStyle: 'white-frame',
      content: {
        title: 'Elysia: draw by Kai draws things',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'I got this from Art Fight 2024, thank you for choosing to draw my Elysia!!'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }
  openElysiaKai2() {
    const artLabel = {
      picUrl: '/assets/images/original/elysia/elysia_kai_draws_things2.png',
      frameStyle: 'black-frame small circle',
      content: {
        title: 'Elysia: draw by Kai draws things',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'This is only a thumbnail, but I really like it.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }
}
