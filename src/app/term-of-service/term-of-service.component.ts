import { Component } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-term-of-service',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink, CommonModule],
  templateUrl: './term-of-service.component.html',
  styleUrl: './term-of-service.component.scss'
})
export class TermOfServiceComponent {
backUrl: any;
characterData: any;
generalRule = new Array(15);
commercial = new Array(2);

}
