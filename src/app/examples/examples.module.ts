import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { EventsBindingsComponent } from './components/events-bindings/events-bindings.component';
import { FormBindingsComponent } from './components/form-bindings/form-bindings.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

@NgModule({
  declarations: [ExamplesComponent, ComponentInteractionComponent, DataBindingsComponent, EventsBindingsComponent, FormBindingsComponent, StructuralDirectivesComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
