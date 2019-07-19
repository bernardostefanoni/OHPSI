import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAbstractaComponent } from './components/section-abstracta/section-abstracta.component';
import { SectionPasosComponent } from './components/section-pasos/section-pasos.component';
import { SectionFinalComponent } from './components/section-final/section-final.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAbstractaComponent,
    SectionPasosComponent,
    SectionFinalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
