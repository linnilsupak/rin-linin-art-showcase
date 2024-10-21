import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-character-icon',
  standalone: true,
  imports: [RouterLink, MiniSpinningComponent],
  templateUrl: './character-icon.component.html',
  styleUrl: './character-icon.component.scss'
})
export class CharacterIconComponent {
  @Input() link: string;
  @Input() img: string;
  @Input() hoverDescription: string;
  @Input() label: string;
  @Input() fragment: string;
  imageLoading = true;

  imageFinishLoading() {
    this.imageLoading = false;
  }

}
