import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePreview',
  standalone: true
})
export class ImagePreviewPipe implements PipeTransform {

  
  transform(value: string): any {
    const fragments = value.split('.');
    if (fragments.length < 2) return value;
    const lastFragment = fragments[fragments.length - 1];
    const queryStringIndex = lastFragment.indexOf('?');
    const extension = queryStringIndex === -1 ? lastFragment : lastFragment.slice(0, queryStringIndex);
    const queryString = queryStringIndex === -1 ? '' : lastFragment.slice(queryStringIndex);
    const baseUrl = fragments.slice(0, fragments.length - 1).join('.');
    return `${baseUrl}_preview.${extension}${queryString}`;
    }

}
