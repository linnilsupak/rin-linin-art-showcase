import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-character-icon',
  standalone: true,
  imports: [RouterLink, MiniSpinningComponent],
  templateUrl: './character-icon.component.html',
  styleUrl: './character-icon.component.scss'
})
export class CharacterIconComponent implements OnInit {
  @Input() link: string;
  @Input() img: string;
  @Input() hoverDescription: string;
  @Input() label: string;
  @Input() fragment: string;
  @ViewChild('imageIcon') imageIcon: ElementRef;
  imageLoading = true;

  ngOnInit(): void {
    if (this.imageIcon?.nativeElement.complete) {
      this.imageLoading = false;
    }
  }

  imageFinishLoading() {
    this.imageLoading = false;
  }

}
