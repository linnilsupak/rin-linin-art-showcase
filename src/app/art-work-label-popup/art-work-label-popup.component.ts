import { Component, inject, model, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImageSrcsetPipe } from "../core/pipe/image-srcset.pipe";
import { MiniSpinningComponent } from "../shared/mini-spinning/mini-spinning.component";

@Component({
  selector: 'app-art-work-label-popup',
  standalone: true,
  imports: [MatIconModule, ImageSrcsetPipe, MiniSpinningComponent],
  templateUrl: './art-work-label-popup.component.html',
  styleUrl: './art-work-label-popup.component.scss'
})
export class ArtWorkLabelPopupComponent implements OnInit{
  readonly dialogRef = inject(MatDialogRef<ArtWorkLabelPopupComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly picUrl = model(this.data.picUrl);
  readonly frameStyle = model(this.data.frameStyle);
  readonly title = model(this.data.content.title);
  readonly title2 = model(this.data.content.title2);
  readonly subTitle = model(this.data.content.subTitle);
  readonly description = model(this.data.content.description);
  readonly isRecTemplate = model(this.data.isRecTemplate);
  readonly minWidth = model(this.data.minWidth);
  readonly minHeight = model(this.data.minHeight);
  noImageSrc = false;
  imageLoaded = true;

  ngOnInit(): void {
    if (this.picUrl.toString().includes('.gif') || this.picUrl.toString().includes('.webp')) {
      this.noImageSrc = true;
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

  imageFinishLoad() {
    this.imageLoaded = false;
  }

}
