import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { mainConfig } from '../core/config/main.config';
import { MiniSpinningComponent } from '../shared/mini-spinning/mini-spinning.component';
import { SafePipe } from '../shared/safe.pipe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { commissionTab } from '../core/enum/commission-tab.enum';
import { FrameItemAnimationComponent } from "../commission/frame-item-animation/frame-item-animation.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { TranslateModule } from '@ngx-translate/core';
import { FrameItemMobileComponent } from "../commission/frame-item-mobile/frame-item-mobile.component";
import { combineLatest } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-commission-form',
  standalone: true,
  imports: [RouterLink, TranslateModule, SafePipe, MiniSpinningComponent, FrameItemAnimationComponent, ReflectionFontComponent, FrameItemMobileComponent],
  templateUrl: './commission-form.component.html',
  styleUrl: './commission-form.component.scss'
})
export class CommissionFormComponent implements OnInit {
  typeCommission = {
    face: environment.typeCommissionForm.face,
    half: environment.typeCommissionForm.half,
    full: environment.typeCommissionForm.full,
    detail: environment.typeCommissionForm.detail,
  };
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private embedLink = '/viewform?embedded=true';
  formLink = this.typeCommission.face + this.embedLink;
  backUrl = '';
  loading = true;
  private responsive = inject(BreakpointObserver);
  heightLandscape = 2080;
  heightPortrait = 2780;
  iframeHeight = this.heightLandscape;
  hideTypeMenu = true;
  activeTab: commissionTab;
  ngOnInit(): void {
    combineLatest([this.route.queryParamMap, this.route.paramMap])
    .subscribe(([query, params]) => {
      if (params.get('type')) {
        this.activeTab = this.typeCommission[params.get('type').toLowerCase()];
        this.formLink = (this.typeCommission[params.get('type').toLowerCase()] || this.typeCommission.face) + this.embedLink;
      } else {
        this.activeTab = undefined;
      }
      this.backUrl = query.get('backUrl') || '/commission';
      if (query.get('prefill')) {
        this.formLink += query.get('prefill');
      }
    });
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape]).subscribe(result => {
      if (result.matches) {
        this.iframeHeight = this.heightPortrait;
      } else {
        this.iframeHeight = this.heightLandscape;
      }
    })
  }

  changeType(type: commissionTab) {
    this.loading = true;
    this.router.navigate(['/commission-form', type.toString()]);
  }

  iframeLoaded() {
    setTimeout(() => {
      this.loading = false;
    }, mainConfig.timeoutAfterFrameLoad);
  }

}
