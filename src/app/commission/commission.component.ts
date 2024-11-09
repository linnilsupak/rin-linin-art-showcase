import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, RouterLink, TranslateModule],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent {
backUrl: any;
characterData: any;

}
