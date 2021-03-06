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
import { ClientComponent } from './components/component-interaction-client-server/client/client.component';
import { ServerComponent } from './components/component-interaction-client-server/server/server.component';
import { InterpolationComponent } from './components/data-bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/data-bindings/property-binding/property-binding.component';
import { TempRefVariableComponent } from './components/data-bindings/temp-ref-variable/temp-ref-variable.component';
import { EventsBindingComponent } from './components/data-bindings/events-binding/events-binding.component';


@NgModule({
  declarations: [ExamplesComponent, ComponentInteractionComponent, DataBindingsComponent, EventsBindingsComponent, FormBindingsComponent, StructuralDirectivesComponent, ParentComponent, ChildComponent, ComponentInteractionAdvComponent, ParentCardComponent, ChildCardComponent, ComponentInteractionClientServerComponent, ClientComponent, ServerComponent, InterpolationComponent, PropertyBindingComponent, TempRefVariableComponent, EventsBindingComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    FormsModule
  ]
})
export class ExamplesModule { }
