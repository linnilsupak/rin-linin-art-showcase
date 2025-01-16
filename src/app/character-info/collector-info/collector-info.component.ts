import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
  selector: 'app-collector-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent],
  templateUrl: './collector-info.component.html',
  styleUrl: './collector-info.component.scss'
})
export class CollectorInfoComponent {
  collectorMyart = [
    {
      picUrl: '/assets/images/original/collector/the_collector_design_ori_rin_linin.png?v=1',
      frameStyle: 'black-frame',
      content: {
        title: 'The collector',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      },
      previewPic: {
        width: '230px',
        height: '164px',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/collector/collector_gallery_ori_rin_linin.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The collector',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      },
      isRecTemplate: true,
      previewPic: {
        width: '230px',
        height: '318px',
        disabled: true
      }
    }
  ];
  collectorFanart = [{
    picUrl: '/assets/images/original/collector/the_collector_overloadwork.png',
    frameStyle: 'black-frame circle m-auto',
    content: {
      title: 'The collector: draw by <a class="underline" href="https://x.com/OverloadWork" target="_blank">OverloadWork</a>',
      title2: 'character design by Rin Linin',
      subTitle: 'CG',
      description: 'An attack I got from Artfight 2024. This is only a thumbnail but I like it very much.'
    },
    isRecTemplate: true,
    previewPic: {
      width: '204px',
      height: '204px',
      disabled: true
    }
  }, {
    picUrl: '/assets/images/original/collector/the_collector_overloadwork2.png?v=1',
    frameStyle: 'white-frame circle',
    content: {
      title: 'The collector: draw by <a class="underline" href="https://x.com/OverloadWork" target="_blank">OverloadWork</a>',
      title2: 'character design by Rin Linin',
      subTitle: 'CG',
      description: 'An attack I got from Artfight 2024, look at how cute he is!!'
    },
    isRecTemplate: true,
    previewPic: {
      width: '220px',
      height: '308px',
      disabled: true
    }
  },
  {
    picUrl: '/assets/images/original/collector/the_collector_cookie_chocoladka.png',
    frameStyle: 'black-frame my-auto',
    content: {
      title: 'The collector: draw by <a class="underline" href="https://www.deviantart.com/cookie-chocoladka" target="_blank">Cookie Chocoladka</a>',
      title2: 'character design by Rin Linin',
      subTitle: 'pencil',
      description: 'A lucky ruffle I win from Cookie Chocoladka which she open on instagram. Oh my! I have never been this lucky before! Yay!'
    },
    previewPic: {
      width: '230px',
      height: '217px',
      disabled: true
    }
  },
  ];
}
