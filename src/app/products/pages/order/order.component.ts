import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUppercase:boolean=false;
  public orderBy?:keyof Hero ;

  public heroes:Hero[]=[
    {
      name:'Superman',
      canfly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canfly:false,
      color:Color.black
    },
    {
      name:'Daredevil',
      canfly:false,
      color:Color.red
    },
    {
      name:'Robin',
      canfly:false,
      color:Color.red
    },
    {
      name:'Linterna verde',
      canfly:true,
      color:Color.green
    },
  ]

  toggleUpperCase():void{
   this.isUppercase=!this.isUppercase;
  }

  changeOrder(value : keyof Hero){
    this.orderBy=value;
  }

}
