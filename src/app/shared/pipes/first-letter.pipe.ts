import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstletter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string) {
    return value.substring(0, 2);
  }
}
