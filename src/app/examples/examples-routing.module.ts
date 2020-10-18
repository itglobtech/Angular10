import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionAdvComponent } from './components/component-interaction-adv/component-interaction-adv.component';
import { ComponentInteractionClientServerComponent } from './components/component-interaction-client-server/component-interaction-client-server.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
