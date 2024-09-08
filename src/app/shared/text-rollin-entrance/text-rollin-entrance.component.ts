import { Component, Input } from '@angular/core';

interface rotateText {
  alphabet: string;
  style: string;
}

@Component({
  selector: 'app-text-rollin-entrance',
  standalone: true,
  imports: [],
  templateUrl: './text-rollin-entrance.component.html',
  styleUrl: './text-rollin-entrance.component.scss'
})
export class TextRollinEntranceComponent {
  @Input()
  set text(val) {
    this._text = val;
    this.splitText = val.split("").map((alpha, index) => {
      return {
        alphabet: alpha,
        style: `animation-delay: ${ (index/10)}s`
      }
    });
  }
  get text() {
    return this._text;
  }
  @Input() runAnimation = true;
  splitText: rotateText[];
  _text: string;
}
