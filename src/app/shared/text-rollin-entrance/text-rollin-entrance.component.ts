import { AfterViewInit, Component, ContentChild, ElementRef, inject, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { mainConfig } from '../../core/config/main.config';


interface rotateText {
  alphabet: string;
  style: string;
}

@Component({
    selector: 'app-text-rollin-entrance',
    imports: [],
    templateUrl: './text-rollin-entrance.component.html',
    styleUrl: './text-rollin-entrance.component.scss'
})
export class TextRollinEntranceComponent implements AfterViewInit {
  @ViewChild('lastItem') lastItem: ElementRef
  @ViewChild('lastContent') lastContent: ElementRef;
  @Input()
  set text(val) {
    this._text = val;
    this.splitText = val.split("").map((alpha, index) => {
      return {
        alphabet: alpha,
        style: `animation-delay: ${ (index/20)}s`
      }
    });
  }
  get text() {
    return this._text;
  }
  @Input() runAnimation = true;
  @Input() lastItemPosition = 200;
  private render = inject(Renderer2);
  splitText: rotateText[];
  _text: string;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.lastContent) {
        this.render.setStyle(this.lastContent.nativeElement, 'animation-delay', `${ (this.splitText.length/20)}s`)
      }
    }, mainConfig.timeoutAfterInit);
  }
}
