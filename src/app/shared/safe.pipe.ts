import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterXSS, getDefaultWhiteList } from 'xss';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: any, type: string): any {
    switch (type) {
      case 'html':
        const whiteList = getDefaultWhiteList();
        // strictest rule for better security
        // inline style for indent only apply to p element
        whiteList.p.push('style');
        const xssSanitizer = new FilterXSS({
          whiteList,
          css: {
            whiteList: { 'margin-left': true }
          }
        });
        const sanitizedContent = xssSanitizer.process(value);
        return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }

}
