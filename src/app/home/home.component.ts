import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";
import { AboutMePicHeaderComponent } from "../about-me/about-me-pic-header/about-me-pic-header.component";
import { SocialMediaSectionComponent } from "../shared/social-media-section/social-media-section.component";
import { ImageSrcsetPipe } from "../core/pipe/image-srcset.pipe";
import { PlaygroundMenuComponent } from "../playground/playground-menu/playground-menu.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [TranslateModule, ReflectionFontComponent, ImageCardComponent, RouterLink,
        CharacterIconComponent, AboutMePicHeaderComponent, SocialMediaSectionComponent, ImageSrcsetPipe, PlaygroundMenuComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
