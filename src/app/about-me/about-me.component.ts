import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaSectionComponent } from "../shared/social-media-section/social-media-section.component";
import { AboutMePicHeaderComponent } from "./about-me-pic-header/about-me-pic-header.component";

@Component({
    selector: 'app-about-me',
    imports: [TranslateModule, SocialMediaSectionComponent, AboutMePicHeaderComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
