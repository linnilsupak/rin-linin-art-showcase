import { Component, Input } from '@angular/core';
import { PlaygroundMenuComponent } from "../../playground/playground-menu/playground-menu.component";
import { ItemLink } from '../../core/models/item-link.model';
import { playgroundMenuConfig } from '../../core/config/playground/playground-menu.config';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground-bottom-menu',
  standalone: true,
  imports: [PlaygroundMenuComponent, RouterLink, CommonModule],
  templateUrl: './playground-bottom-menu.component.html',
  styleUrl: './playground-bottom-menu.component.scss'
})
export class PlaygroundBottomMenuComponent {
  @Input()
  set currentLabel(val: string) {
    const currentIndex = this.playgroundMenuConfig.findIndex(item => item.label === val);
    const previousIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;
    if (previousIndex < 0) {
      this.previousItem = this.back;
    } else {
      this.previousItem = this.playgroundMenuConfig[previousIndex];
    }
    if (nextIndex >= this.playgroundMenuConfig.length) {
      this.previousItem = this.back;
    } else {
      this.nextItem = this.playgroundMenuConfig[nextIndex];
    }
  }
  previousItem: ItemLink;
  nextItem: ItemLink;
  readonly back = {
    label: 'PLAYGROUND.TITLE',
    link: '/playground'
  };
  readonly playgroundMenuConfig = playgroundMenuConfig;

}
