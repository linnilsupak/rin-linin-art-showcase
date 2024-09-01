import { AfterViewInit, Component, Inject,  } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TextRollinEntranceComponent } from "../text-rollin-entrance/text-rollin-entrance.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, TextRollinEntranceComponent],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  openMenu = false;


  constructor() {
  }

  ngAfterViewInit(): void {
  }
}
