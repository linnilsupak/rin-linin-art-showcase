import { Component, inject, OnInit } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { characterInfo } from '../core/config/character-info.config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { personaInfo } from '../core/config/persona-info.config';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [ReflectionFontComponent, RouterLink, TranslateModule, RouterOutlet],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss'
})
export class CharacterInfoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private titleService = inject(Title);
  private translateService = inject(TranslateService);
  backUrl = '';
  characterName: string
  characterData;

  ngOnInit(): void {
    this.findCharacter();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.findCharacter();
      })
  }

  findCharacter() {
    let notFound = true;
    this.backUrl = this.route.snapshot.queryParamMap.get('backUrl') || '/original';
    if (this.route.snapshot.firstChild.url.length > 0) {
      this.characterName = this.route.snapshot.firstChild.url[0].path;
      if (this.characterName) {
        if (this.characterName === personaInfo.name) {
          this.characterData = personaInfo;
          this.titleService.setTitle(this.translateService.instant(personaInfo.title) + ': ' + this.translateService.instant('TITLE.CHARACTER_INFO'));
          notFound = false;
        } else {
          const character = characterInfo[this.characterName];
          if (character) {
            this.characterData = character;
            this.titleService.setTitle(this.translateService.instant(character.title) + ': ' + this.translateService.instant('TITLE.CHARACTER_INFO'));
            notFound = false;
          }
        }
      }
    }
    if (notFound) {
      this.router.navigateByUrl('/not-found');
    }
  }
}
