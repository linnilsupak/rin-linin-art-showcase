import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-playground-menu',
    imports: [TranslateModule],
    templateUrl: './playground-menu.component.html',
    styleUrl: './playground-menu.component.scss'
})
export class PlaygroundMenuComponent {
  @Input() label: string;

}
