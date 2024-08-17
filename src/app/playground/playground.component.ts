import { Component } from '@angular/core';
import { ReflectionFontComponent } from "../reflection-font/reflection-font.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  
}
