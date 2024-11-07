import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mainConfig } from '../../core/config/main.config';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-character-icon',
  standalone: true,
  imports: [RouterLink, MiniSpinningComponent],
  templateUrl: './character-icon.component.html',
  styleUrl: './character-icon.component.scss'
})
export class CharacterIconComponent implements AfterViewInit {
  @Input() link: string;
  @Input() img: string;
  @Input() hoverDescription: string;
  @Input() label: string;
  @Input() fragment: string;
  @ViewChild('imageIcon') imageIcon: ElementRef;
  imageLoading = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('this.imageIcon?.nativeElement.complete', this.imageIcon?.nativeElement?.complete);
      console.log('this.imageIcon?.nativeElement.completeLoad', this.imageIcon?.nativeElement?.completeLoad);
      console.log('this.imageIcon?.nativeElement.naturalWidth', this.imageIcon?.nativeElement.naturalWidth);
      console.log('this.imageIcon?.nativeElement.width', this.imageIcon?.nativeElement.width);
      if (this.imageIcon?.nativeElement.complete) {
        this.imageLoading = false;
        // this.completeLoad.next(true);
      }
    }, mainConfig.timeoutAfterInit);
  }

  imageFinishLoading() {
    this.imageLoading = false;
  }

}
