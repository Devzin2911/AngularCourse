import { AsyncPipe, CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NgSwitch],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  public num1: number = 6
  public num2: number = 15

  public switchCondition: string = 'D'

  public itens: Array<{ name: string }> = [{ name: "Gabriel Rocha"}]
  public loadingData: Observable<string[]> = of([
    'item 1',
    'item 2', 
    'item 3',
  ]).pipe(delay(3000))


  public trackByFn(index: number) {
    return index;
  }


  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
