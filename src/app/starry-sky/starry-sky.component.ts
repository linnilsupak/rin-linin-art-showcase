import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Star } from '../core/star.model';
import { WINDOW, WINDOW_PROVIDERS } from '../core/service/window.service';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, debounceTime, interval, Subscription } from 'rxjs';
import { mainConfig } from '../core/config/main.config';

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
  bigNumStars = 2000;
  miniNumStars = 1000;
  animateInterval$ = new Subscription();
  isBrowser = true;
  starAnimationResize$ = new BehaviorSubject<{w: number, h: number}>(undefined);
  readonly limitCanvas = 10;

  constructor(@Inject(WINDOW) private window: Window, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.starAnimationResize$.next({ w: this.window.innerWidth, h: this.window.innerHeight});
  }
  ngAfterViewInit(): void {
    this.starAnimationResize$.pipe(
      debounceTime(mainConfig.timeoutAfterViewInit)
    ).subscribe(( {w,h}) => {
      if (!this.isBrowser) return;
      if (this.screenW && this.screenH) {
        this.animateInterval$.unsubscribe();
        this.animateInterval$ = new Subscription();
        this.context.clearRect(0, 0, this.screenW, this.screenH);
      }
      this.setCanvasWidthHeight(w, h);
      setTimeout(() => {
        this.createStarAnimation();
      }, mainConfig.timeoutAfterViewInit);
    });
    this.starAnimationResize$.next({ w: this.window.innerWidth, h: this.window.innerHeight});
  }

  setCanvasWidthHeight(w: number, h: number) {
    this.screenH = h;
    this.screenW = w;
    // Fill out the canvas
    this.canvas.nativeElement.height = this.screenH;
    this.canvas.nativeElement.width = this.screenW;
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  createStarAnimation() {
    const numStars = this.screenW <= 700 ? this.miniNumStars: this.bigNumStars;
    this.stars = [];
    // Create all the stars
	  for(var i = 0; i < numStars; i++) {
      var x = Math.round(Math.random() * this.screenW);
      var y = Math.round(Math.random() * this.screenH);
      var length = 1 + Math.random() * 2;
      var opacity = Math.random();

      // Create a new star and draw
      var star = new Star(x, y, length, opacity);

      // Add the the stars array
      this.stars.push(star);
    }
    // this.window.requestAnimationFrame(this.animate);
    this.animateInterval$.add(
      interval(1000 / this.fps).subscribe(() => {
        this.animate();
      })
    );
  }


  animate() {
    this.context.clearRect(0, 0, this.screenW, this.screenH);
    this.stars.forEach((star) => {
      star.draw(this.context, this.screenH, this.screenW);
    });
  }


}
