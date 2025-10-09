import { Component, inject, OnInit } from '@angular/core';
import { LoadingService } from '../../loading.service';
import { MiniSpinningComponent } from "../mini-spinning/mini-spinning.component";

@Component({
    selector: 'app-loading',
    imports: [MiniSpinningComponent],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit  {
  private loadingService = inject(LoadingService);
  showLoading = false;

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(flag => {
      this.showLoading = flag;
    })
  }
}
