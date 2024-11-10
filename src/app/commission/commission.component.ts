import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { FrameItemAnimationComponent } from "./frame-item-animation/frame-item-animation.component";

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, FrameItemAnimationComponent],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent {
backUrl: any;
characterData: any;

}
