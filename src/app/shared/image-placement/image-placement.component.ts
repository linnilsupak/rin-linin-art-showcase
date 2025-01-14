import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { mainConfig } from '../../core/config/main.config';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-image-placement',
  standalone: true,
  imports: [MiniSpinningComponent],
  templateUrl: './image-placement.component.html',
  styleUrl: './image-placement.component.scss'
})
export class ImagePlacementComponent implements AfterViewInit {
@Input() width: string;
@Input() height: string;
@Input() srcLink: string;
@Input() alt: string;
@Input('itemClass') class: string;
@ViewChild('imageShow') imageShow: ElementRef;
imageLoading = true;


ngAfterViewInit(): void {
  setTimeout(() => {
    if (this.imageShow?.nativeElement.complete) {
      this.imageLoading = false;
    }
  }, mainConfig.timeoutAfterInit);
}

imageFinishLoad() {
  this.imageLoading = false;
}
}
