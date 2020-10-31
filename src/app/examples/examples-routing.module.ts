import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionAdvComponent } from './components/component-interaction-adv/component-interaction-adv.component';
import { ComponentInteractionClientServerComponent } from './components/component-interaction-client-server/component-interaction-client-server.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { EventsBindingComponent } from './components/data-bindings/events-binding/events-binding.component';
import { InterpolationComponent } from './components/data-bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/data-bindings/property-binding/property-binding.component';
import { TempRefVariableComponent } from './components/data-bindings/temp-ref-variable/temp-ref-variable.component';
import { EventsBindingsComponent } from './components/events-bindings/events-bindings.component';
import { FormBindingsComponent } from './components/form-bindings/form-bindings.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'data-bindings', component: DataBindingsComponent },
  { path: 'events-bindings', component: EventsBindingsComponent },
  { path: 'form-bindings', component: FormBindingsComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  { path: 'component-interaction-adv', component: ComponentInteractionAdvComponent },
  { path: 'component-interaction-cs', component: ComponentInteractionClientServerComponent },
  {path:'interpolation',component:InterpolationComponent},
  {path:'property-binding',component:PropertyBindingComponent},
  {path:'events-binding',component:EventsBindingComponent},
  {path:'temp-ref-variable',component:TempRefVariableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
