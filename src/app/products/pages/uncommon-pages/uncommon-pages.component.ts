import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  /* i18n Select pipe   male y female puede estar con '' o sincomillas
   no hay problema con eso
  */
  public name:string='Nilton';
  public gender:'male'|'female'='male';
  public invitationMap={
    male:'invitarlo',
    female:'invitarla'
  }

  changeCliet():void{
    this.name='Melisa';
    this.gender='female';
  }
  /* i18n Plural pipe
  */
 public clients:string[]=['Nilton','juan','melisa','pedro','natalia','hector','pepe','salome','celeste'];
public clientsMap={
  '=0':'No tenemos nigun cliente esperando',
  '=1':'Tenemos un cliente esperando',
  '=2':'Tenemos 2 clientes esperando',
  'other':'tenemos # clientes esperando'
}


 deleteCliente():void{
  this.clients.shift();
 }
 /* Key Value pipe
  */
 public person={
  name:'fernando',
  age:'36',
  address:'otawa,canada'
 }
 /* Async pipe
  */
 public myobservableTime:Observable<number>=interval(2000)
 .pipe(tap(value=>console.log('tap',value))
 );

 public promiseValue:Promise<string>=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('tenemos en data la promesa');
    console.log('Tenemos data en promesa');
    this.person.name='otro nombre';
  }, 3500);
 })
}
