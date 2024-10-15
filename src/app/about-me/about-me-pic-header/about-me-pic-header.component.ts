import { Component, Input } from '@angular/core';
import { MoreButtonComponent } from "../../shared/more-button/more-button.component";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from "../../shared/reflection-font/reflection-font.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-pic-header',
  standalone: true,
  imports: [MoreButtonComponent, RouterLink, TranslateModule, ReflectionFontComponent, CommonModule],
  templateUrl: './about-me-pic-header.component.html',
  styleUrl: './about-me-pic-header.component.scss'
})
export class AboutMePicHeaderComponent {
  @Input() isHome = false;

}
