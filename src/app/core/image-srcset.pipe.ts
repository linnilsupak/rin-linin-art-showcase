import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSrcset',
  standalone: true
})
export class ImageSrcsetPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const fragments = value.split('.');
    if (fragments.length < 2) return value;
    const lastFragment = fragments[fragments.length - 1];
    const queryStringIndex = lastFragment.indexOf('?');
    const extension = queryStringIndex === -1 ? lastFragment : lastFragment.slice(0, queryStringIndex);
    const queryString = queryStringIndex === -1 ? '' : lastFragment.slice(queryStringIndex);
    const baseUrl = fragments.slice(0, fragments.length - 1).join('.');
    return `${baseUrl}@2x.${extension}${queryString} 2x, ${baseUrl}@3x.${extension}${queryString} 3x`;
    }

}
