import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, map, of, Subscription, switchMap } from 'rxjs';
import { characterInfo } from '../core/config/character-info.config';
import { mainConfig } from '../core/config/main.config';
import { ScrollPositionService } from '../core/service/scroll-position.service';
import { CharacterFrameComponent } from "../shared/character-frame/character-frame.component";
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { personaInfo } from '../core/config/persona-info.config';

@Component({
  selector: 'app-original',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, CharacterIconComponent, CharacterFrameComponent],
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss',
})
export class OriginalComponent implements AfterViewInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private scrollPositionService = inject(ScrollPositionService);
  private subscription = new Subscription();
  personaInfo = personaInfo;
  characterInfo = Object.keys(characterInfo).map(key => {
    return {name: key, ...characterInfo[key]};
   }) ;
  fragment;

  ngAfterViewInit() {
    let scrollCount = 0;
    setTimeout(() => {
      this.subscription.add(
        this.route.fragment.pipe(
          map(fragment => {
            this.fragment = fragment;
            try {
              if (this.fragment) {
                scrollCount = 0;
                return this.scrollPositionService.setScrollToElementById(this.fragment);
              }
            } catch (e) {
            }
            return -1;
          }),
          switchMap((val) => combineLatest([of(val), this.scrollPositionService.scrollPosition$, this.scrollPositionService.scrollHeight$]))
        )
        .subscribe(([elementScrollPosition, position, scrollHeight]) => {
          if (this.fragment) {
            if (position >= Math.round(elementScrollPosition) || (position === scrollHeight)) {
              scrollCount++;
            } else if (position < Math.round(elementScrollPosition) && scrollCount === 1) {
              scrollCount++;
            }
          }
          if (position < elementScrollPosition) {
            if (scrollCount >= 2) {
              setTimeout(() => {
                this.fragment = undefined;
                this.router.navigateByUrl(this.router.url.split('#')[0]);
                scrollCount = 0;
              }, mainConfig.timeoutAfterInit);
            }
          }
        })
      );
    }, mainConfig.timeoutAfterInit);
  }
}
