import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-art-work-label-popup',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './art-work-label-popup.component.html',
  styleUrl: './art-work-label-popup.component.scss'
})
export class ArtWorkLabelPopupComponent {
  readonly dialogRef = inject(MatDialogRef<ArtWorkLabelPopupComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly picUrl = model(this.data.picUrl);
  readonly frameStyle = model(this.data.frameStyle);
  readonly title = model(this.data.content.title);
  readonly title2 = model(this.data.content.title2);
  readonly subTitle = model(this.data.content.subTitle);
  readonly description = model(this.data.content.description);

  closePopup() {
    this.dialogRef.close();
  }

}
