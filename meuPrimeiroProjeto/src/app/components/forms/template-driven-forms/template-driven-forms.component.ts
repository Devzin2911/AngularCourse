import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{ comida: string, preco: string}>>([
      {
       comida: 'X-salada', preco: 'R$10,00' 
    },
    {
       comida: 'X-Duplo Porradão', preco: 'R$17,00' 
      },
      {
       comida: 'Joelho', preco: 'R$6,00' 
      }
  ])
  
  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log('é valido')
    }
    console.log(form.valid)
  }

}
