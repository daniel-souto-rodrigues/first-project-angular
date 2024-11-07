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
import { OutputPropertyComponent } from './output-property/output-property.component';
import { AppCicloComponent } from './app-ciclo/app-ciclo.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivesNgswitchComponent } from './directives-ngswitch/directives-ngswitch.component';
import { DirectivesNgforComponent } from './directives-ngfor/directives-ngfor.component';
import { DirectivesNgclassComponent } from './directives-ngclass/directives-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { ExampleNgcontentComponent } from './example-ngcontent/example-ngcontent.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    AppCicloComponent,
    DirectivesComponent,
    DirectivesNgswitchComponent,
    DirectivesNgforComponent,
    DirectivesNgclassComponent,
    DirectiveNgstyleComponent,
    ElvisOperatorComponent,
    ExampleNgcontentComponent,
    BackgroundYellowDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective
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
