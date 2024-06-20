import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


//configuracion de local o idioma de la app
import localeESCO from '@angular/common/locales/es-CO';//importacion del idioma
import localefrCA from '@angular/common/locales/fr-CA';//importacion del idioma
import { registerLocaleData } from '@angular/common';//funcion que se importa para los idiomas

registerLocaleData(localeESCO);//utilizacion de funcion por idioma
registerLocaleData(localefrCA);//utilizacion de funcion por idioma

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
