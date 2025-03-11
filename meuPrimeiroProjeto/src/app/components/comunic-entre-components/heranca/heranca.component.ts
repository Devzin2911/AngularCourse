import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-heranca',
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './heranca.component.html',
  styleUrl: './heranca.component.scss'
})
export class HerancaComponent {
  public name = signal("Gabriel Rocha")
  public outputName = signal("OutPut: Sem Valor")
}
