import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reflection-font',
    imports: [],
    templateUrl: './reflection-font.component.html',
    styleUrl: './reflection-font.component.scss'
})
export class ReflectionFontComponent {
  @Input() text: string;
  @Input() fontClass: string;

}
