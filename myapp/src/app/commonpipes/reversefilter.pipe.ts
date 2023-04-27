import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversefilter'
})
export class ReversefilterPipe implements PipeTransform {
  transform(value:string) :unknown{
    

    return value.split('').reverse().join('');
}
}
