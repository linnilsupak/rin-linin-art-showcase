import { Component } from '@angular/core';
import { PictureFrameComponent } from "../picture-frame/picture-frame.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [PictureFrameComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  
}
