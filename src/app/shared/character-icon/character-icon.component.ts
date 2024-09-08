import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-icon',
  standalone: true,
  imports: [],
  templateUrl: './character-icon.component.html',
  styleUrl: './character-icon.component.scss'
})
export class CharacterIconComponent {
  @Input() link: string;
  @Input() img: string;
  @Input() hoverDescription: string;
  @Input() label: string;

}
