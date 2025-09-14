import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    value = value.replace('\r\n', '\n');
    value = value.replace('\n', '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
