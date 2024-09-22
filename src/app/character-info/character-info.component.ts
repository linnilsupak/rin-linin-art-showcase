import { Component, inject, OnInit } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { characterInfo } from '../core/config/character-info.config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [ReflectionFontComponent, RouterLink, TranslateModule],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss'
})
export class CharacterInfoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title)
  private translateService = inject(TranslateService)
  characterName: string
  characterData;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.characterName = params.get('characterName');
      let notFound = true;
      if (this.characterName) {
        const character = characterInfo[this.characterName];
        if (character) {
          this.characterData = character;
          this.titleService.setTitle(this.translateService.instant(character.title) + ': ' + this.translateService.instant('TITLE.CHARACTER_INFO'));
          notFound = false;
        }
      }
      if (notFound) {
        this.router.navigateByUrl('/not-found');
      }
    })
  }
}
