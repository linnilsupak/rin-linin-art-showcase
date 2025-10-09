import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-card',
    imports: [ CommonModule],
    templateUrl: './image-card.component.html',
    styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() miniTitle: string;
  @Input() link: string;
  @Input() minHeight = 'inherit';

}
