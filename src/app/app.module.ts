import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CursosModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
