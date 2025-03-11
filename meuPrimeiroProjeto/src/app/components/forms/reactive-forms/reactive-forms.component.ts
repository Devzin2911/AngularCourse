import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null
    }

    return { invalidText: true}
  }
}


@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder)


  public profileForm = this.#fb.group({
    name: ['', [Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJs']
    }),
    myFavFoods: this.#fb.array([['X-tudo']]),
  }) 


  public addFoods(newFood: string) {
    const myFavoriteFood = this.profileForm.get('myFavFoods') as FormArray;
    const addNewFood = new FormControl(newFood)
    
    myFavoriteFood.push(addNewFood)
  }


  public submit() {
    console.log(this.profileForm.valid)
    if (this.profileForm.valid) {
      console.log(this.profileForm.value)
    }
  }

  

  public updateName() {
    this.profileForm.patchValue({
      name: 'Zoe Cortes',
      myStacks: {
        front: 'HTML5',
        back: 'Java'
      }
    })
  }
}
