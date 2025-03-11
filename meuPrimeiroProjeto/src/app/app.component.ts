import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/template/signals/signals.component';
import { HerancaComponent } from './components/comunic-entre-components/heranca/heranca.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterOutlet,
      AngularPipesComponent,
      TemplateDrivenFormsComponent,
      ReactiveFormsComponent,
      ContentComponent,
      HostElementsComponent,
      LifeCycleComponent,
      ConsumeServiceComponent
    ],
  template: `
      <!-- <router-outlet><router-outlet /> -->

      <h1>Curso de Angular</h1>
      <app-consume-service />
      

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
  

export class AppComponent {
  
  
}
