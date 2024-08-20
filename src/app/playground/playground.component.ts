import { Component } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";

enum roomType {
  gallery,
  blankSpace
}

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  // galleryRoom = {
  //   roomName: 'Art Fight 2024',
  //   roomMeaning: 'ปีแรกที่รินได้ลองเล่น Artfight และได้ทดลองวาดตัวละครหลากหลายรูปแบบค่ะ',
  //   rooms: [
  //     {
  //       roomType: roomType.gallery,
  //       pictureRows: [
  //         {
  //           rowClass: 'col-12 col-lg d-flex flex-column',
  //           pictureFrames: [
  //             {
  //               frameClass: 'black-frame circle small',
  //               rowClass: 'mt-0 mt-lg-auto ms-auto me-auto me-lg-0 mb-2 mb-lg-0 mini-frame-200',
  //               pictureUrl: '/assets/images/playground/artfight2024/furry_rin_linin.png'
  //             },
  //             {
  //               frameClass: 'white-frame small',
  //               rowClass: 'mt-2 ms-auto me-auto me-lg-0 mini-frame-200',
  //               pictureUrl: '/assets/images/playground/artfight2024/rioni_rin_linin.png'
  //             }
  //           ]
  //         },
  //         { rowClass: 'col-12 col-lg d-flex align-items-end mt-3 mt-lg-0',
  //           pictureFrames: [
  //             {
  //               frameClass: 'white-double-frame small',
  //               rowClass: '',
  //               pictureUrl: '/assets/images/playground/artfight2024/mobias_rin_linin.png'
  //             },
  //           ]
  //         },
  //         { rowClass: 'col-12 col-lg d-flex mt-3 mt-lg-0',
  //           pictures: [
  //             {
  //               frameClass: 'black-frame small',
  //               rowClass: 'mt-auto me-auto ms-auto ms-lg-0  mini-frame-300',
  //               pictureUrl: '/assets/images/playground/artfight2024/red_rin_linin.png'
  //             },
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       roomType: roomType.gallery,
  //       pictureRows: [
  //         {
  //           frameClass: '',
  //           rowClass: '',
  //           pictureUrl: ''
  //         },
  //         {
  //           frameClass: '',
  //           rowClass: '',
  //           pictureUrl: ''
  //         },
  //       ]
  //     },
  //     {
  //       roomType: roomType.blankSpace
  //     },
  //     {
  //       roomType: roomType.gallery,
  //       pictureRows: [
  //         {
  //           frameClass: '',
  //           rowClass: '',
  //           pictureUrl: ''
  //         },
  //       ]
  //     },
  //   ]
  // }

}
