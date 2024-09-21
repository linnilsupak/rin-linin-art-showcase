import { Component, Input } from '@angular/core';
import { MoreButtonComponent } from "../more-button/more-button.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-frame',
  standalone: true,
  imports: [MoreButtonComponent, TranslateModule, RouterLink],
  templateUrl: './character-frame.component.html',
  styleUrl: './character-frame.component.scss'
})
export class CharacterFrameComponent {
  @Input() arrangement: 'left' | 'right' = 'left';
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() characterName: string;

}
