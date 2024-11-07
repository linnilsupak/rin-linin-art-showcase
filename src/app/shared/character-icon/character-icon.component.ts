import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged, interval, Subject, Subscription, takeUntil } from 'rxjs';
import { mainConfig } from '../../core/config/main.config';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-character-icon',
  standalone: true,
  imports: [RouterLink, MiniSpinningComponent],
  templateUrl: './character-icon.component.html',
  styleUrl: './character-icon.component.scss'
})
export class CharacterIconComponent implements AfterViewInit, OnDestroy {
  @Input() link: string;
  @Input() img: string;
  @Input() hoverDescription: string;
  @Input() label: string;
  @Input() fragment: string;
  @ViewChild('imageIcon') imageIcon: ElementRef;
  imageLoading = true;
  private subscription = new Subscription();
  private completeLoad = new Subject();

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this,this.subscription.add(
      //   interval(5000).pipe(
      //     takeUntil(this.completeLoad.asObservable()),
      //     distinctUntilChanged()
      //   ).subscribe(
      //     { next:(val) => {
      //     if (this.imageIcon?.nativeElement.complete) {
      //         this.imageLoading = false;
      //         this.completeLoad.next(true);
      //       }
      //   }})
      // );
      console.log('this.imageIcon?.nativeElement.complete', this.imageIcon?.nativeElement?.complete);
      console.log('this.imageIcon?.nativeElement.completeLoad', this.imageIcon?.nativeElement?.completeLoad);
      console.log('this.imageIcon?.nativeElement.naturalWidth', this.imageIcon?.nativeElement.naturalWidth);
      console.log('this.imageIcon?.nativeElement.width', this.imageIcon?.nativeElement.width);
      if (this.imageIcon?.nativeElement.complete) {
        this.imageLoading = false;
        // this.completeLoad.next(true);
      }
    }, mainConfig.timeoutAfterInit);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  imageFinishLoading() {
    this.imageLoading = false;
  }

}
