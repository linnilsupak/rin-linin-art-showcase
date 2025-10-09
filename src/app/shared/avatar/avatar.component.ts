import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-avatar',
    imports: [CommonModule, MatTooltipModule],
    templateUrl: './avatar.component.html',
    styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input()
  url: string;
  @Input()
  width: number;
  @Input()
  defaultColor = 'transparent';
  // @Input()
  // defaultImage = picDefault;
  @Input()
  defaultAlphabet = '';
  @Input()
  alphabetColor = 'white';
  @Input()
  tooltipLabel = '';
  @Input()
  get expandable() { return this._expandable; }
  // set expandable(value: any) { this._expandable = coerceBooleanProperty(value); }

  private _expandable: boolean;
  // private imageDialog: MatDialogRef<ImageDialogComponent>;
  // private matDialog: MatDialog

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    // if (this.imageDialog) this.imageDialog.close();
  }

  // openImageDialog(imgUrl: string) {
  //   if (!this.expandable) return;
  //   this.imageDialog = this.matDialog.open(ImageDialogComponent,
  //     {
  //       data: { imgUrl }
  //     }
  //   );
  // }

}
