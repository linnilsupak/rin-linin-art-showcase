import { Component, inject, OnInit } from '@angular/core';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
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
