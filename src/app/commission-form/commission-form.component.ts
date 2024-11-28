import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { mainConfig } from '../core/config/main.config';
import { MiniSpinningComponent } from '../shared/mini-spinning/mini-spinning.component';
import { SafePipe } from '../shared/safe.pipe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-commission-form',
  standalone: true,
  imports: [RouterLink, SafePipe, MiniSpinningComponent],
  templateUrl: './commission-form.component.html',
  styleUrl: './commission-form.component.scss'
})
export class CommissionFormComponent implements OnInit {
  typeCommission = {
    face: 'https://docs.google.com/forms/d/e/1FAIpQLSeLwTzeol8ICdU5hzcqn1cfycP1u4dxf07Md0cF-Fpq9bRn3A',
    half: 'https://docs.google.com/forms/d/e/1FAIpQLScYSJVkn2PvciPXHOgGvAZGj1OLx1mNXaKw9YG7UhBkaoO4FQ',
    full: 'https://docs.google.com/forms/d/e/1FAIpQLSdPZVfl56UwMad69Wpmfq1LNoAm_qSZ7U7nrUip1G3qL5Jlkw',
    detail: 'https://docs.google.com/forms/d/e/1FAIpQLSdCybb1Jsr_DZ8m1hZrXhwdXqLbklxyMqUr3UuKZpIyV7wtcQ'
  };
  private route = inject(ActivatedRoute);
  private embedLink = '/viewform?embedded=true';
  contactMeLink = this.typeCommission.face + this.embedLink;
  backUrl = '';
  loading = true;
  private responsive = inject(BreakpointObserver);
  heightLandscape = 1580;
  heightPortrait = 1980;
  iframeHeight = this.heightLandscape;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query) => {
      if (query.get('type')) {
        this.contactMeLink = (this.typeCommission[query.get('type')] || this.typeCommission.face) + this.embedLink;
      }
      this.backUrl = query.get('backUrl') || '/commission';
      if (query.get('prefill')) {
        this.contactMeLink += query.get('prefill');
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

  iframeLoaded() {
    setTimeout(() => {
      this.loading = false;
    }, mainConfig.timeoutAfterFrameLoad);
  }

}
