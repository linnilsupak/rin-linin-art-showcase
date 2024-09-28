import { MatDialog } from "@angular/material/dialog";
import { ArtWorkLabelPopupComponent } from "../../art-work-label-popup/art-work-label-popup.component";
import { ArtworkLabel } from "../models/artwork-label.model";

export function openArtWorkLabel(matDialog: MatDialog, { picUrl, frameStyle, content, isRecTemplate}: ArtworkLabel) {
    matDialog.open(ArtWorkLabelPopupComponent, {
      panelClass: 'art-work-label',
      autoFocus: false,
      data: {
        picUrl, frameStyle, content, isRecTemplate
      }
    });
  }