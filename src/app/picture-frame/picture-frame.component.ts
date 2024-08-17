import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  standalone: true,
  imports: [],
  templateUrl: './picture-frame.component.html',
  styleUrl: './picture-frame.component.scss'
})
export class PictureFrameComponent {
  @Input() frameClass= 'black-frame';
  @Input() imageUrl = '';
  @Input() frameWidth = '';
  @Input() frameHeight = '';

}
