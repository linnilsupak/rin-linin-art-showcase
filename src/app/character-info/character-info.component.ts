import { Component, inject, OnInit } from '@angular/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [ReflectionFontComponent, RouterLink],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss'
})
export class CharacterInfoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  characterName: string

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.characterName = params.get('characterName');
    })
  }
}
