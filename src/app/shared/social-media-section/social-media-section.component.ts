import { Component } from '@angular/core';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";

@Component({
  selector: 'app-social-media-section',
  standalone: true,
  imports: [ImageSrcsetPipe],
  templateUrl: './social-media-section.component.html',
  styleUrl: './social-media-section.component.scss'
})
export class SocialMediaSectionComponent {

}
