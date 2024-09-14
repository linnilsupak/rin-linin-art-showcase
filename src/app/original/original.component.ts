import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";
import { ActivatedRoute } from '@angular/router';
import { ScrollPositionService } from '../core/service/scroll-position.service';

@Component({
  selector: 'app-original',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, CharacterIconComponent],
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss',
})
export class OriginalComponent implements AfterViewInit, OnInit {
  private route = inject(ActivatedRoute);
  private scrollPositionService = inject(ScrollPositionService);
  fragment;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.route.fragment
      .subscribe(fragment => {
        this.fragment = fragment;
        try {
          if (this.fragment) {
            if (this.scrollPositionService.setScrollToElementById(this.fragment)) {
              this.fragment = undefined;
            }
          }
        } catch (e) {
        }
      });
  }
}
