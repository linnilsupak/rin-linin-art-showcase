import { AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Star } from '../core/models/star.model';
import { WINDOW, WINDOW_PROVIDERS } from '../core/service/window.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
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
  @ViewChild('myCanvas', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  screenH: number;
  screenW: number;
  stars = [];
  fps = 50;
  bigNumStars = 1000;
  miniNumStars = 500;
  animateInterval$ = new Subscription();
  isBrowser = true;
  starAnimationResize$ = new BehaviorSubject<{ w: number, h: number }>(undefined);
  reqAnimationId;

  constructor(@Inject(WINDOW) private window: Window, @Inject(PLATFORM_ID) platformId: Object, @Inject(DOCUMENT) private document: Document,) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.context.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);
    this.starAnimationResize$.next({ w: this.window.innerWidth, h: this.window.innerHeight });
  }
  ngAfterViewInit(): void {
    this.starAnimationResize$.pipe(
      debounceTime(mainConfig.timeoutAfterInit)
    ).subscribe(({ w, h }) => {
      if (!this.isBrowser) return;
      if (this.screenW && this.screenH) {
        this.reqAnimationId = null;
      }
      this.setCanvasWidthHeight(w, h);
      setTimeout(() => {
        this.createStarAnimation();
        const fpsInterval = 1000 / this.fps;
        let then = Date.now();
        const smoothAnimation = () => {
          this.reqAnimationId = requestAnimationFrame(smoothAnimation);
          // calc elapsed time since last loop
          const now = Date.now();
          const elapsed = now - then;

          // if enough time has elapsed, draw the next frame
          if (elapsed > fpsInterval) {

            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            then = now - (elapsed % fpsInterval);

            // Put your drawing code here
            this.context.clearRect(0, 0, this.screenW, this.screenH);
            // const offScreenCanvas = this.cacheCanvasList[this.canvasIndex];
            const offScreenCanvas = this.createOffscreenCanvas();
            this.copyToOnScreen(offScreenCanvas);
          }
        }
        this.reqAnimationId = requestAnimationFrame(smoothAnimation);
      }, mainConfig.timeoutAfterInit);
    });
    this.starAnimationResize$.next({ w: this.window.innerWidth, h: this.window.innerHeight });
  }

  copyToOnScreen(offScreenCanvas: HTMLCanvasElement) {
    var onScreenContext = this.canvas.nativeElement.getContext('2d');
    onScreenContext.drawImage(offScreenCanvas, 0, 0);
  }

  createOffscreenCanvas(): HTMLCanvasElement {
    const offScreenCanvas = this.document.createElement('canvas');
    offScreenCanvas.width = this.screenW;
    offScreenCanvas.height = this.screenH;
    const contextTemp = offScreenCanvas.getContext("2d");
    this.drawAllStar(contextTemp);
    return offScreenCanvas;
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
    const numStars = this.screenW <= 700 ? this.miniNumStars : this.bigNumStars;
    this.stars = [];
    // Create all the stars
    for (var i = 0; i < numStars; i++) {
      var x = Math.round(Math.random() * this.screenW);
      var y = Math.round(Math.random() * this.screenH);
      var length = 1 + Math.random() * 2;
      var opacity = Math.random();

      // Create a new star and draw
      var star = new Star(x, y, length, opacity);

      // Add the the stars array
      this.stars.push(star);
    }
  }


  drawAllStar(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, this.screenW, this.screenH);
    this.stars.forEach((star) => {
      star.draw(context, this.screenH, this.screenW);
    });
  }


}
