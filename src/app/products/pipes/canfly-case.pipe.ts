import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name:'canfly'
})

export class CanflyCasePipe implements PipeTransform{
  transform(value: boolean):'vuela'|'no vuela' {
    console.log();
   return value ? 'vuela' : 'no vuela';
  }

}
