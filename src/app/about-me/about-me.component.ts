import { Component } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { TranslateModule } from '@ngx-translate/core';
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { RouterLink } from '@angular/router';
import { ImageSrcsetPipe } from '../core/pipe/image-srcset.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, MoreButtonComponent, RouterLink,ImageSrcsetPipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
