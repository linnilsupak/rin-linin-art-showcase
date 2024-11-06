import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";
import { ImagePreviewPipe } from "../../core/pipe/image-preview.pipe";

@Component({
  selector: 'app-image-placement',
  standalone: true,
  imports: [MiniSpinningComponent, ImagePreviewPipe],
  templateUrl: './image-placement.component.html',
  styleUrl: './image-placement.component.scss'
})
export class ImagePlacementComponent implements OnInit {
@Input() width: string;
@Input() height: string;
@Input() srcLink: string;
@Input() alt: string;
@Input() class: string;
@ViewChild('imageShow') imageShow: ElementRef;
imageLoading = true;

ngOnInit(): void {
  if (this.imageShow?.nativeElement.complete) {
    this.imageLoading = false;
  }
}

imageFinishLoad() {
  this.imageLoading = false;
}
}
