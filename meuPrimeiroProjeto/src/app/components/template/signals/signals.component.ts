import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal('Gabriel');
  public lastName = signal('Rocha');

  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`
  })

  public array = signal([1]);

  constructor() {

  }

  public updateFirstName() {
    return this.firstName.set("Zoe")

  }

  public updateLastName() {
    return this.lastName.set("Cortes")
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1]
    })
  }
}
