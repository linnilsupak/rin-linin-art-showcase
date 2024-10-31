import { Component, Input } from '@angular/core';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";
import { ImagePreviewPipe } from "../../core/pipe/image-preview.pipe";

@Component({
  selector: 'app-image-placement',
  standalone: true,
  imports: [MiniSpinningComponent, ImagePreviewPipe],
  templateUrl: './image-placement.component.html',
  styleUrl: './image-placement.component.scss'
})
export class ImagePlacementComponent {
@Input() width: string;
@Input() height: string;
@Input() srcLink: string;
@Input() alt: string;
@Input() class: string;
imageLoaded = true;

imageFinishLoad() {
  this.imageLoaded = false;
}
}
