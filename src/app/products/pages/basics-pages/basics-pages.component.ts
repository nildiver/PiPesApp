import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {
  public nameLower:string ='nilton';
  public nameUpper:string ='NILTON';
  public nameFulname:string ='nIlTon CaRo';

  public customDate:Date= new Date();
}
