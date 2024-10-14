import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtWorkLabelPopupComponent } from '../../art-work-label-popup/art-work-label-popup.component';
import { AddClassInViewportDirective } from '../../core/add-class-in-viewport.directive';
import { AddClassOnScrollPositionDirective } from '../../core/add-class-on-scroll-position.directive';
import { ArtworkLabel } from '../../core/models/artwork-label.model';
import { ImagePreviewPipe } from "../../core/pipe/image-preview.pipe";
import { ImageSrcsetPipe } from '../../core/pipe/image-srcset.pipe';
import { ScrollIntoViewWhenReachDirective } from '../../core/scroll-into-view-when-reach.directive';

@Component({
  selector: 'app-gallery-room',
  standalone: true,
  imports: [ImagePreviewPipe, ImageSrcsetPipe, ImagePreviewPipe, AddClassInViewportDirective, AddClassOnScrollPositionDirective, ScrollIntoViewWhenReachDirective],
  templateUrl: './gallery-room.component.html',
  styleUrl: './gallery-room.component.scss'
})
export class GalleryRoomComponent {
  @Input()
  set galleryRoom(val: ArtworkLabel[]) {
    this._galleryRoom = val;
  }
  get galleryRoom(): ArtworkLabel[] {
    return this._galleryRoom;
  }
  @Input() pattern: 'wide' | '3-rows';
  @Input() enableAutoScrollFirstRow = false;

  matDialog = inject(MatDialog);
  _galleryRoom: ArtworkLabel[];

  openArtWorkLabel({ picUrl, frameStyle, content, isRecTemplate, previewPic}: ArtworkLabel) {
    this.matDialog.open(ArtWorkLabelPopupComponent, {
      panelClass: 'art-work-label',
      autoFocus: false,
      data: {
        picUrl, frameStyle, content, isRecTemplate,
        minWidth: previewPic.width,
        minHeight: previewPic.height
      }
    });
  }
}
