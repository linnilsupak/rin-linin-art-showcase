import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-spinning',
  standalone: true,
  imports: [],
  templateUrl: './mini-spinning.component.html',
  styleUrl: './mini-spinning.component.scss'
})
export class MiniSpinningComponent {
  @Input() color: string;

}
