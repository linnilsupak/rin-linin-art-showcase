import { Component } from '@angular/core';
import { ImageSrcsetPipe } from "../core/pipe/image-srcset.pipe";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ImageSrcsetPipe, ReflectionFontComponent, MoreButtonComponent, RouterLink, TranslateModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
