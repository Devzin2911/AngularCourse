import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/template/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    TemplateVariablesComponent,
    RouterOutlet,
    DeferrableViewsComponent,
    ControlFlowComponent,
    SignalsComponent],
  template: `
      <!-- <router-outlet><router-outlet /> -->
      <h1>Curso de Angular</h1>
      <app-signals />

    `,
  styleUrl: './app.component.scss'
})
  

export class AppComponent {
  title = 'meuPrimeiroProjeto';
}
