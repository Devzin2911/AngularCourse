import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';


@Component({
  selector: 'app-new-component',
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent implements OnInit {
  public name = 'New Component'

  #apiService = inject(ApiService);
  
  ngOnInit(): void {
    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log("Complete!")
    });

    this.#apiService.name$.next('Gabriel Rocha $$')

    this.#apiService.name.set('Ana Carolina')

    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000)
  }
}
