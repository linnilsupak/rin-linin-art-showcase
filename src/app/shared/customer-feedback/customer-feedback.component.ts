import { Component, Input } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { CustomerFeedback } from '../../core/models/customer-feedback.model';

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.scss'
})
export class CustomerFeedbackComponent {
  @Input() customerFeedback: CustomerFeedback;

}
