import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { SafePipe } from '../shared/safe.pipe';
import { MiniSpinningComponent } from "../shared/mini-spinning/mini-spinning.component";
import { mainConfig } from '../core/config/main.config';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink, SafePipe, MiniSpinningComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  contactMeLink = environment.contactMeForm + '/viewform?embedded=true';
  backUrl = '';
  loading = true;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query) => {
      this.backUrl = query.get('backUrl') || '/about-me';
      if (query.get('prefill')) {
        this.contactMeLink += query.get('prefill');
      }
    });
  }

  iframeLoaded() {
    setTimeout(() => {
      this.loading = false;
    }, mainConfig.timeoutAfterFrameLoad);
  }

}
