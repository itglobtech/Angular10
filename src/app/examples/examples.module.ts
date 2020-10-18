import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { EventsBindingsComponent } from './components/events-bindings/events-bindings.component';
import { FormBindingsComponent } from './components/form-bindings/form-bindings.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ComponentInteractionAdvComponent } from './components/component-interaction-adv/component-interaction-adv.component';
import { ParentCardComponent } from './components/component-interaction-adv/parent-card/parent-card.component';
import { ChildCardComponent } from './components/component-interaction-adv/child-card/child-card.component';
import { FormsModule } from '@angular/forms';
import { ComponentInteractionClientServerComponent } from './components/component-interaction-client-server/component-interaction-client-server.component';


@NgModule({
  declarations: [ExamplesComponent, ComponentInteractionComponent, DataBindingsComponent, EventsBindingsComponent, FormBindingsComponent, StructuralDirectivesComponent, ParentComponent, ChildComponent, ComponentInteractionAdvComponent, ParentCardComponent, ChildCardComponent, ComponentInteractionClientServerComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    FormsModule
  ]
})
export class ExamplesModule { }
