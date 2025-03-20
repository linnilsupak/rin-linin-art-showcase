import { Component, inject, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../../art-work-label-popup/art-work-label-popup.component';
import { AddClassInViewportDirective } from '../../core/add-class-in-viewport.directive';
import { AddClassOnScrollPositionDirective } from '../../core/add-class-on-scroll-position.directive';
import { ArtworkLabel } from '../../core/models/artwork-label.model';
import { ImagePreviewPipe } from "../../core/pipe/image-preview.pipe";
import { ImageSrcsetPipe } from '../../core/pipe/image-srcset.pipe';
import { ScrollIntoViewWhenReachDirective } from '../../core/scroll-into-view-when-reach.directive';
import { LoadingService } from '../../loading.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";
import { ImagePlacementComponent } from "../image-placement/image-placement.component";

@Component({
    selector: 'app-gallery-room',
    imports: [ImagePreviewPipe, ImageSrcsetPipe, ImagePreviewPipe, AddClassInViewportDirective, AddClassOnScrollPositionDirective, ScrollIntoViewWhenReachDirective, CommonModule, MiniSpinningComponent, ImagePlacementComponent],
    templateUrl: './gallery-room.component.html',
    styleUrl: './gallery-room.component.scss'
})
export class GalleryRoomComponent implements OnDestroy {
  @Input()
  set galleryRoom(val: ArtworkLabel[]) {
    this._galleryRoom = val;
  }
  get galleryRoom(): ArtworkLabel[] {
    return this._galleryRoom;
  }
  @Input() pattern: 'wide' | '3-rows' | 'center' | 'equal';
  @Input() enableAutoScrollFirstRow = false;
  @Input() enableSlidIn = false;

  private loadingService = inject(LoadingService);
  private subscription = new Subscription();
  matDialog = inject(MatDialog);
  _galleryRoom: ArtworkLabel[];

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openArtWorkLabel({ picUrl, frameStyle, content, isRecTemplate, previewPic}: ArtworkLabel) {
    this.loadingService.setLoading(true);
    const dialogRef = this.matDialog.open(ArtWorkLabelPopupComponent, {
      panelClass: 'art-work-label',
      autoFocus: false,
      data: {
        picUrl, frameStyle, content, isRecTemplate,
        minWidth: previewPic.width,
        minHeight: previewPic.height
      }
    });
    this.subscription.add(
      dialogRef.afterOpened().subscribe(() => {
        this.loadingService.setLoading(false);
      })
    )
  }
}
