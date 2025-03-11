import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import localePt from '@angular/common/locales/pt';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';
registerLocaleData(localePt);

@Component({
  selector: 'app-angular-pipes',
  imports: [
    CommonModule,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    CustomStringPipe,
    PercentPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR'}]
})
  
  
  
export class AngularPipesComponent {
  public date = signal(new Date());
  public jason = signal([
    { name: 'Gabriel Rocha Cortes'}
  ])

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(200));

}
