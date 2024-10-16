import { Component, Input } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [ReflectionFontComponent, CommonModule],
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
