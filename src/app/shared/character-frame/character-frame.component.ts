import { Component, Input } from '@angular/core';
import { MoreButtonComponent } from "../more-button/more-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-character-frame',
  standalone: true,
  imports: [MoreButtonComponent, TranslateModule],
  templateUrl: './character-frame.component.html',
  styleUrl: './character-frame.component.scss'
})
export class CharacterFrameComponent {
  @Input() arrangement: 'left' | 'right' = 'left';
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;

}
