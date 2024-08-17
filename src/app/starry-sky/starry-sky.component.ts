import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Star } from '../core/star.model';
import { WINDOW, WINDOW_PROVIDERS } from '../core/service/window.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-starry-sky',
  standalone: true,
  imports: [],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './starry-sky.component.html',
  styleUrl: './starry-sky.component.scss'
})
export class StarrySkyComponent implements AfterViewInit {
  // its important myCanvas matches the variable name in the template
  @ViewChild('myCanvas', {static: false})
  canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  screenH: number;
  screenW: number;
  stars = [];
  fps = 50;
  numStars = 2000;
  isBrowser = true;

  constructor(@Inject(WINDOW) private window: Window, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.screenH = this.window.innerHeight;
    this.screenW = this.window.innerWidth;
    // Fill out the canvas
    this.canvas.nativeElement.setAttribute('height', this.screenH?.toString());
    this.canvas.nativeElement.setAttribute('width', this.screenW?.toString());
    this.context = this.canvas.nativeElement.getContext('2d');
    setTimeout(() => {
      this.createStarAnimation();
    }, 500);
  }

  createStarAnimation() {
    // Create all the stars
	  for(var i = 0; i < this.numStars; i++) {
      var x = Math.round(Math.random() * this.screenW);
      var y = Math.round(Math.random() * this.screenH);
      var length = 1 + Math.random() * 2;
      var opacity = Math.random();
      
      // Create a new star and draw
      var star = new Star(x, y, length, opacity);
      
      // Add the the stars array
      this.stars.push(star);
    }
	
	  setInterval(() => {
      this.animate();
    }, 1000 / this.fps);
  }


  animate() {
    this.context.clearRect(0, 0, this.screenW, this.screenH);
    this.stars.forEach((star) => {
      star.draw(this.context, this.screenH, this.screenW);
    });
  }


}
