import { Component } from '@angular/core';
import { AutoAdjustIframeHeightWidthDirective } from '../shared/auto-adjust-iframe-height-width.directive';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AutoAdjustIframeHeightWidthDirective],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
