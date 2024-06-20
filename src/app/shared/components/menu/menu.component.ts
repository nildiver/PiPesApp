import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {


  public menuItems:MenuItem[]=[]

  ngOnInit() {
  this. menuItems=[
   {
    label:'pipes angular',
    icon:'pi pi-desktop',
    items:[
      {
        label:'Textos y fechas',
        icon:'pi pi-align-alert',
        routerLink:'/'
      },
      {
        label:'Numeros',
        icon:'pi pi-dollar',
        routerLink:'numbers'
      },
      {
        label:'No comunes',
        icon:'pi pi-globe',
        routerLink:'uncommon'
      },
    ]
   },
   {
    label:'Pipes personalizados',
    icon:'pi pi-cog',
    items:[
      {
        label:'Custom pipes',
        icon:'pi pi-cog',
         routerLink:'custom'
      }
    ]
   }
  ]
  }
}
