import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'SortBy',
  standalone: false,
})
export class SotByPipe implements PipeTransform {

  transform(heroes:Hero[],sortBy?:keyof Hero|''): Hero[] {
   console.log({heroes,sortBy})
   switch(sortBy){
    case'name':
    return heroes.sort((a,b)=> (a.name>b.name)? 1:-1);
    case'canfly':
    return heroes.sort((a,b)=> (a.canfly>b.canfly)? 1:-1);
    case'color':
    return heroes.sort((a,b)=> (a.color>b.color)? 1:-1);
    default:
      return heroes;
   }


  }

}
