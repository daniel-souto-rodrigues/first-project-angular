import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
