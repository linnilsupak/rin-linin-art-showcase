import { Component } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, RouterLink, TranslateModule, RouterOutlet],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent {
backUrl: any;
characterData: any;

}
